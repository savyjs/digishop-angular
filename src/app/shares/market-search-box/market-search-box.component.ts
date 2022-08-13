import {Component, Host, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-search-box',
  templateUrl: './market-search-box.component.html',
  styleUrls: ['./market-search-box.component.css']
})
export class MarketSearchBoxComponent implements OnInit {
  tags: Array<any> = [];
  showSearchModal: boolean = false;
  someText ?: string = 'Hi'
  inside: boolean = true

  constructor() {
  }

  @HostListener("div:searchBox")
  clicked() {
    this.inside = true;
  }

  @HostListener("document:click")
  clickedOut() {
    if (this.inside) {
      alert('outside')
    }
  }

  ngOnInit(): void {
  }

}
