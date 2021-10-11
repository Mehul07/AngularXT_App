import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Output() timer = new EventEmitter();
  @Output() pauseTimeEvent = new EventEmitter();
  @Output() eventCounts = new EventEmitter();
  currentTimer: number = 0;
  eventTriggered = false;
  interval: any;
  registerCount = {
    startCount: 0,
    pauseCount: 0,
    resetCount: 0
  };
  pauseTimes: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  triggerTimer() {
    if (this.currentTimer > 0) {
      this.eventTriggered = !this.eventTriggered;
      if (this.eventTriggered) {
        this.interval = setInterval(() => {
          if(this.currentTimer > 0) {
            this.currentTimer--;
            this.timer.emit(this.currentTimer);
          }
        },1000);
        this.pauseTimeEvent.emit("Started at " + new Date());
        this.registerCount.startCount += 1;
        this.timer.emit(this.currentTimer);
        this.eventCounts.emit(this.registerCount);
      } else {
        this.pauseTimer();
        this.pauseTimeEvent.emit("Paused at " + new Date());
      }
    }
  }

  pauseTimer() {
    if (this.currentTimer > 0) {
      clearInterval(this.interval);
      this.timer.emit(this.currentTimer);
      this.pauseTimes.push(this.currentTimer);
      this.registerCount.pauseCount += 1;
      this.eventCounts.emit(this.registerCount);
    }
  }

  resetEvent() {
    clearInterval(this.interval);
    this.currentTimer = 0;
    this.timer.emit(this.currentTimer);
    this.registerCount.resetCount += 1;
    this.eventCounts.emit(this.registerCount);
    this.pauseTimes = [];
    // this.timerService.startPause.next('reset');
    // this.timerService.countSub.next('reset');
  }

}
