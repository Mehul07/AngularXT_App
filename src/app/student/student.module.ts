import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentdetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
  ],
  providers: []
})
export class StudentModule { }
