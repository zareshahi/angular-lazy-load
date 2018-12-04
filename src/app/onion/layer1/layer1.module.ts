import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layer1RoutingModule } from './layer1-routing.module';
import { Component1Component } from './component1/component1.component';

@NgModule({
  imports: [
    CommonModule,
    Layer1RoutingModule
  ],
  declarations: [Component1Component]
})
export class Layer1Module { }
