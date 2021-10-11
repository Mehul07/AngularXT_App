import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersubjectRoutingModule } from './timersubject-routing.module';
import { ParenttimerComponent } from './parenttimer/parenttimer.component';
import { ChildoneComponent } from './parenttimer/childone/childone.component';
import { ChildtwoComponent } from './parenttimer/childtwo/childtwo.component';
import { ChildthreeComponent } from './parenttimer/childthree/childthree.component';
import { ChildfourComponent } from './parenttimer/childfour/childfour.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParenttimerComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    ChildfourComponent
  ],
  imports: [
    CommonModule,
    TimersubjectRoutingModule,
    FormsModule
  ]
})
export class TimersubjectModule { }
