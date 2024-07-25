import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent {
  form!:FormGroup
  constructor(private mDatabase:AngularFireDatabase,
              public dialogRef: MatDialogRef<AddTypeComponent>, ) {

 alert('into type list')
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      // type:new FormControl('')
    })

  }
  get Name() {
    return this.form?.get('name')
  }
  AddTypeList() {

    if(this.form.valid)
    {
      this.mDatabase.object('Categorylist/'+this.form.get('name')!.value).set(this.form.value).then(()=>{
        this.dialogRef.close()
      })
        .catch((reason)=>{
          alert(reason)
          console.log(reason)
        })    }
  }
}
