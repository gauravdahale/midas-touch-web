import {Component, Inject} from '@angular/core';
import {Contacts} from "../contacts.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent {
constructor(
  @Inject(MAT_DIALOG_DATA) public data: Contacts
){

}
}
