import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  @Input() events: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
