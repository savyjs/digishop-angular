import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-header',
  templateUrl: './market-header.component.html',
  styleUrls: ['./market-header.component.css']
})
export class MarketHeaderComponent implements OnInit {
  logo ?: string = '/assets/static/dkala/logo.svg';
  title ?: string = undefined ;
  constructor() {
  }

  ngOnInit(): void {
  }

}
