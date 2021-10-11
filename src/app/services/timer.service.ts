import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class TimerService {
    timerValue = new BehaviorSubject(0);
    startPause = new Subject();
    countSub = new Subject();
}