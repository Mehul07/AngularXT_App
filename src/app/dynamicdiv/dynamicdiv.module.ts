import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicdivRoutingModule } from './dynamicdiv-routing.module';
import { CreatedivComponent } from './creatediv/creatediv.component';


@NgModule({
  declarations: [
    CreatedivComponent
  ],
  imports: [
    CommonModule,
    DynamicdivRoutingModule
  ]
})
export class DynamicdivModule { }
