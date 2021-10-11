import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.scss']
})
export class ChildthreeComponent implements OnInit {
  events: string[] = [];
  subs$: Subscription = new Subscription();
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.subs$ = this.timerService.startPause.subscribe((value: any) => {
      if (value === 'reset') {
        this.events = [];
      } else {
        this.events.push(value);
      }
    });
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }

}
