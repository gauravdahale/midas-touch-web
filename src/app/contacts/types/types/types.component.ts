import {Component, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {AddTypeComponent} from "../add-type/add-type.component";
import {MatSelectChange} from "@angular/material/select";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
export interface ListType {
  name: string
  id?: string
}

export class TypeData {
  key = ''
  name = ''
}
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {
  selectedType = '';
  mRef: Subscription | undefined;
  categories: Array<ListType> = []
  displayedColumns: string[] = ['name', 'Actions'];
  categoryList$: Observable<ListType[]>
  fieldForm!: FormGroup
  data: Array<TypeData> = []
  dataSource: MatTableDataSource<TypeData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private matDialog: MatDialog,
              private mDatabase: AngularFireDatabase) {
    this.dataSource = new MatTableDataSource(this.data);
    this.categoryList$ = mDatabase.list<ListType>('Categorylist').valueChanges()
    this.fieldForm = new FormGroup({
      field: new FormControl('', Validators.required)
    })
  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: MatSelectChange) {
    const filterValue = (event).value;
    console.log('dfdsf', filterValue)
    this.getData(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // @needConfirmation({title:'Confirm',message:'So you want to add this type?'})
  AddType(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.matDialog.open(AddTypeComponent, {
       height:'250px',width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
//
  getData(filterValue: any) {
    this.mRef = this.mDatabase.list('subCategory/' + filterValue).snapshotChanges().subscribe(snaps => {
      this.data = []
      snaps.forEach(snap => {
        console.log(snap.payload.val())
        const a = new TypeData()
        a.key = snap.key as string
        a.name = snap.payload.val() as string
        this.data.push(a)
        this.dataSource = new MatTableDataSource<TypeData>(this.data)
      })
    })

  }


  AddTypData() {
    const key = this.mDatabase.database.ref('subCategory/' + this.selectedType).push().key
    if (this.fieldForm.valid) {
      const field = this.fieldForm.get('field')?.value
      this.mDatabase.object('subCategory/' + this.selectedType + "/" + key).set(field).then(() => {
        this.fieldForm?.reset()
      })
    } else alert('Please Enter Form')
// alert(this.field)
  }

  Delete(key: string) {
    this.mDatabase.object('subCategory/' + this.selectedType + "/" + key).remove().then(() => {

    })
  }
}
