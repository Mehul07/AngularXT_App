import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.scss']
})
export class ChildtwoComponent implements OnInit {
  currentTimer: number = 0;
  eventTriggered = false;
  interval: any;
  pauseTimes : number[] = [];
  registerCount = {
    startCount: 0,
    pauseCount: 0,
    resetCount: 0
  };

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  startTimer() {
    if (this.currentTimer > 0) {
      this.eventTriggered = !this.eventTriggered;
      if (this.eventTriggered) {
        this.interval = setInterval(() => {
          if(this.currentTimer > 0) {
            this.currentTimer--;
            this.timerService.timerValue.next(this.currentTimer);
          }
        },1000);
        this.timerService.startPause.next("Started at " + new Date());
        this.registerCount.startCount += 1;
        this.timerService.countSub.next(this.registerCount);
      } else {
        this.pauseTimer();
        this.timerService.startPause.next("Paused at " + new Date());
      }
    }
  }

  pauseTimer() {
    if (this.currentTimer > 0) {
      clearInterval(this.interval);
      this.pauseTimes.push(this.currentTimer);
      this.registerCount.pauseCount += 1;
      this.timerService.countSub.next(this.registerCount);
    }
  }

  resetEvent() {
    clearInterval(this.interval);
    this.currentTimer = 0;
    this.timerService.timerValue.next(this.currentTimer);
    this.registerCount.resetCount += 1;
    this.timerService.countSub.next(this.registerCount);
    this.pauseTimes = [];
    this.timerService.startPause.next('reset');
    this.timerService.countSub.next('reset');
  }
}
