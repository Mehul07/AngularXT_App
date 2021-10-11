import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatediv',
  templateUrl: './creatediv.component.html',
  styleUrls: ['./creatediv.component.scss']
})
export class CreatedivComponent implements OnInit {
  divContainer: any[] = [];
  elements = [1];
  count = 1;
  constructor() { }

  ngOnInit(): void {
    this.divContainer = Array(5).fill("Div Created", 0);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.divContainer.push("Div Created");
    }
  }

  bottomReached(): boolean {
    if ((window.innerHeight + window.scrollY + 10) >= document.body.scrollHeight) {
      return true;
    } else return false;
  }

  fireAlert(indx: number) {
    alert(`Button in ${indx} Div Clicked`);
  }

}
