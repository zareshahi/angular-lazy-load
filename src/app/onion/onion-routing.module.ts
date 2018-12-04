import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlerComponent } from './handler/handler.component';

const routes: Routes = [
  {
    path: '',
    component: HandlerComponent
  },
  {
    path: '1',
    loadChildren: './layer1/layer1.module#Layer1Module'
  },
  {
    path: '2',
    loadChildren: './layer2/layer2.module#Layer2Module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnionRoutingModule { }
