import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { TypesComponent } from './types/types/types.component';

const routes: Routes = [
  {path: '', component: ContactsComponent},
  { path: 'types',  component:TypesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceTableRoutingModule {}
