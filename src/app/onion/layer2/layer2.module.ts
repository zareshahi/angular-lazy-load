import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layer2RoutingModule } from './layer2-routing.module';
import { Component2Component } from './component2/component2.component';

@NgModule({
  imports: [
    CommonModule,
    Layer2RoutingModule
  ],
  declarations: [Component2Component]
})
export class Layer2Module { }
