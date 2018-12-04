import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {
    path: '',
    component: Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layer2RoutingModule { }
