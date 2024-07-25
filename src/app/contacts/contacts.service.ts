import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contacts } from './contacts.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import {AngularFirestore} from "@angular/fire/compat/firestore";
@Injectable()
export class ContactsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/contacts.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Contacts[]> = new BehaviorSubject<Contacts[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Contacts;
  constructor(private httpClient: HttpClient,
              private readonly mFirestore:AngularFirestore) {
    super();
  }
  get data(): Contacts[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllContactss(): void {
    this.subs.sink = this.httpClient.get<Contacts[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
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
