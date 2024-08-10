import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from './contacts.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Contacts } from './contacts.model';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { Direction } from '@angular/cdk/bidi';
import { TableExportUtil } from 'src/app/shared/tableExportUtil';
import { TableElement } from 'src/app/shared/TableElement';
import { formatDate } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {MatTableDataSource} from "@angular/material/table";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ViewContactComponent} from "./view-contact/view-contact.component";
import {EditFormComponent} from "./edit-form/edit-form.component";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent
  implements OnInit
{
  filterToggle = false;
  displayedColumns = [
    'name',
    'significantDate',
    'mobile',
    'email',
    'reference',
    'taq',
    'personal',
    'actions',
  ];
  exampleDatabase?: ContactsService;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<Contacts>(true, []);
  id?: number;
  contacts?: Contacts;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public contactsService: ContactsService,
    private mFirestore:AngularFirestore,
    private snackBar: MatSnackBar,

  ) {

  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
  }
  loadData(){
   this.contactsService.getAllContacts().subscribe(res=>{
     this.dataSource = new MatTableDataSource<any>(res)
     this.dataSource.paginator =this.paginator
     this.dataSource.sort =this.sort
   })
  }
  detailsCall(row: Contacts) {

    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    this.dialog.open(FormComponent, {
      data: {
        contacts: row,
        action: 'details',
      },
      direction: tempDirection,
      height: '75%',
      width: '35%',
    });
  }
  toggleStar(row: Contacts) {
    console.log(row);
  }
  // editCall(row: Contacts) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(FormComponent, {
  //     data: {
  //       contacts: row,
  //       action: 'edit',
  //     },
  //     direction: tempDirection,
  //   });
  //   this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  //     if (result === 1) {
  //       // When using an edit things are little different, firstly we find record inside DataService by id
  //       const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
  //         (x) => x.id === this.id
  //       );
  //       // Then you update that record using data from dialogData (values you enetered)
  //       if (foundIndex != null && this.exampleDatabase) {
  //         this.exampleDatabase.dataChange.value[foundIndex] =
  //           this.contactsService.getDialogData();
  //         // And lastly refresh table
  //         this.refreshTable();
  //         this.showNotification(
  //           'black',
  //           'Edit Record Successfully...!!!',
  //           'bottom',
  //           'center'
  //         );
  //       }
  //     }
  //   });
  // }

onCreate(){
const dialogRef= this.dialog.open(CreateFormComponent,{
  height:'100%',
  width:"180%"
});


}

  // deleteItem(row: Contacts) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     height: '250px',
  //     width: '300px',
  //     data: row,
  //     direction: tempDirection,
  //   });
  //   this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  //     if (result === 1) {
  //       const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
  //         (x) => x.id === this.id
  //       );
  //       // for delete we use splice in order to remove single object from DataService
  //       if (foundIndex != null && this.exampleDatabase) {
  //         this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
  //         this.refreshTable();
  //         this.showNotification(
  //           'snackbar-danger',
  //           'Delete Record Successfully...!!!',
  //           'bottom',
  //           'center'
  //         );
  //       }
  //     }
  //   });
  // }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.renderedData.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.renderedData.forEach((row) =>
  //         this.selection.select(row)
  //       );
  // }


  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x: { name: any; email: any; mobile: any; significantDate: string | number | Date; address: any; }) => ({
        Name: x.name,
        Email: x.email,
        Mobile: x.mobile,
        'Birth Date':
          formatDate(new Date(x.significantDate), 'yyyy-MM-dd', 'en') || '',
        Address: x.address,
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  openViewDialog(row:Contacts) {
    this.dialog.open(ViewContactComponent,{
      data:row,
      height:'80%',
      width:'80vw'
    })
  }

openEditDialog(formData:Contacts){
this.dialog.open(EditFormComponent,{
  data:formData,
  height:'80%',
  width:'80vw'
})
}

}


function commands(){

  // To Read a list of data from firestore





}






