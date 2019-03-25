import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./about/about.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ItemComponent} from "./item/item.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: PortfolioComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "portfolio/:id",
        component: ItemComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
