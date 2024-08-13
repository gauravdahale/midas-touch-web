import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-label',
  templateUrl: './view-label.component.html',
  styleUrls: ['./view-label.component.scss']
})
export class ViewLabelComponent {
@Input() title=''
@Input() subTitle=''
@Input() dateValue:any|null=null;  // if Date
@Input() date=false
@Input() array:any[]=[]      //name of the array e.g. contacts addresses etc.
@Input() isArray=false  //if data is of type array
@Input() item=''   //property in array e.g. mobile, type, name,city, pincode
}
