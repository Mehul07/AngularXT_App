import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit {
  timerToCounter: number = 0;
  subs$: Subscription = new Subscription();
  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {
    this.subs$ = this.timerService.timerValue.subscribe(val => {
      this.timerToCounter = val;
    });
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
