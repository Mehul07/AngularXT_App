import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() timerToCounter: number = 0;
  countdown: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }
  
}
