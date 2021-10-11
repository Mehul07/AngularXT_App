import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './main/first/first.component';
import { SecondComponent } from './main/second/second.component';
import { ThirdComponent } from './main/third/third.component';
import { FourthComponent } from './main/fourth/fourth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class TimerModule { }
