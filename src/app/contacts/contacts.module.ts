import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceTableRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FormComponent as contactForm } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule,} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ContactsService } from './contacts.service';
import { ComponentsModule } from '../shared/components/components.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditReferenceComponent } from './edit-reference/edit-reference.component';
import {TypesComponent} from "./types/types/types.component";
import {AddTypeComponent} from "./types/add-type/add-type.component";
import {PrettyJsonModule} from "@stg-247/ngx-prettyjson";
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewLabelComponent } from './view-label/view-label.component';
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [ContactsComponent, contactForm, DeleteComponent, CreateFormComponent, EditReferenceComponent,TypesComponent,AddTypeComponent, ViewContactComponent, ViewLabelComponent, EditFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdvanceTableRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        MatCheckboxModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatSortModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        ComponentsModule,
        PrettyJsonModule,
        MatListModule,
        MatLineModule,

    ],
  providers: [ContactsService,TitleCasePipe],

})
export class ContactsModule {}
