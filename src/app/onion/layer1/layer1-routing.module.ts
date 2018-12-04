import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component1Component } from './component1/component1.component';

const routes: Routes = [
  {
    path: '',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layer1RoutingModule { }
