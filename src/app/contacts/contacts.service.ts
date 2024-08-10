import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Contacts } from './contacts.model';
import {  HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import {AngularFirestore} from "@angular/fire/compat/firestore";
@Injectable()
export class ContactsService  {
  private readonly API_URL = 'assets/data/contacts.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Contacts[]> = new BehaviorSubject<Contacts[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Contacts;
  constructor( private  mFirestore:AngularFirestore) {

  }
  get data(): Contacts[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllContacts(): Observable<Contacts[]> {
   return  this.mFirestore.collection<Contacts>('contacts').valueChanges({idField: 'id'})
    // return this.mFirestore.collection<any>('contacts').valueChanges()

  }
  addContacts(contacts: Contacts): void {
    this.dialogData = contacts;

    /*  this.httpClient.post(this.API_URL, contacts).subscribe(data => {
      this.dialogData = contacts;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateContacts(contacts: Contacts): void {
    this.dialogData = contacts;

    /* this.httpClient.put(this.API_URL + contacts.id, contacts).subscribe(data => {
      this.dialogData = contacts;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteContacts(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
  addContactToDb(contact:any){
   return  this.mFirestore.collection('contacts').add(contact)
  }
}
