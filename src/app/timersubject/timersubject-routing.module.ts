import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParenttimerComponent } from './parenttimer/parenttimer.component';

const routes: Routes = [
  {
    path: '',
    component: ParenttimerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimersubjectRoutingModule { }
