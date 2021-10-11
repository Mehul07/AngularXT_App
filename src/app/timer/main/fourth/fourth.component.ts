import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {
  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  @Input() resetCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
