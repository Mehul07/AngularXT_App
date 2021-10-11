import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

const routes: Routes = [
  {
    path: '',
    component: StudentdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
