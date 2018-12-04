import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnionRoutingModule } from './onion-routing.module';
import { HandlerComponent } from './handler/handler.component';

@NgModule({
  imports: [
    CommonModule,
    OnionRoutingModule
  ],
  declarations: [HandlerComponent]
})
export class OnionModule { }
