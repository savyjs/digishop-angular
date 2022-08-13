import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketLayoutRoutingModule } from './market-layout-routing.module';
import { MarketLayoutComponent } from './market-layout.component';
import { SvgIconsModule } from '../../shares/svg-icons/svg-icons.module';
import { SvgIconsComponent } from '../../shares/svg-icons/svg-icons.component';
import { MarketHeaderComponent } from '../../shares/market-header/market-header.component';
import { MarketFooterComponent } from '../../shares/market-footer/market-footer.component';
import {MarketSearchBoxComponent} from "../../shares/market-search-box/market-search-box.component";


@NgModule({
  declarations: [
    MarketLayoutComponent,
    SvgIconsComponent,
    MarketHeaderComponent,
    MarketSearchBoxComponent,
    MarketFooterComponent
  ],
  imports: [
    CommonModule,
    MarketLayoutRoutingModule,
    SvgIconsModule
  ]
})
export class MarketLayoutModule { }
