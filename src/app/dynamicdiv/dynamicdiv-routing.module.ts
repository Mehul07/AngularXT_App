import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedivComponent } from './creatediv/creatediv.component';

const routes: Routes = [
  {
    path: '',
    component: CreatedivComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicdivRoutingModule { }
