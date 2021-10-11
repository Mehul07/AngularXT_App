import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-childfour',
  templateUrl: './childfour.component.html',
  styleUrls: ['./childfour.component.scss']
})
export class ChildfourComponent implements OnInit {
  startCount = 0;
  pauseCount = 0;
  resetCount = 0;
  subs$: Subscription = new Subscription();
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.subs$ = this.timerService.countSub.subscribe((val: any) => {
      if (val === 'reset') {
        this.startCount = 0;
        this.pauseCount = 0;
        this.resetCount = 0;
      } else {
        this.startCount = val.startCount;
        this.pauseCount = val.pauseCount;
        this.resetCount = val.resetCount;
      }
    });
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }

}
