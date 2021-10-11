import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  startTime: number = 0;
  eventArr: string[] = [];
  eventCounts = {
    startCount: 0,
    pauseCount: 0,
    resetCount: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  getTimer(val: any) {
    this.startTime = val;
  }

  getEvent(val: any) {
    this.eventArr.push(val);
  }

  getEventCounts(val: any) {
    this.eventCounts.startCount = val.startCount;
    this.eventCounts.pauseCount = val.pauseCount;
    this.eventCounts.resetCount = val.resetCount;
  }
}
