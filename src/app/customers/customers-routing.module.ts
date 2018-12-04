import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { HandlerComponent } from './handler/handler.component';

const routes: Routes = [
  {
    path: '',
    component: HandlerComponent
  },
  {
    path: 'list',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
