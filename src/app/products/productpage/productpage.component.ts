import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  viewType: string = 'grid';
  productsArr: {}[] = [];
  constructor() { 
    this.productsArr = Array(40).fill("Product",0);
  }

  ngOnInit(): void {
  }

  changeViewType(type: any) {
    if (type === 'list') {
      this.viewType = 'list';
    } else {
      this.viewType = 'grid';
    }
  }

  setClass() {
    return this.viewType === 'list' ? 'card-holder-list-view' : 'card-holder-grid';
  }
}
