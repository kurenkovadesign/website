import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-portfolio",
  templateUrl: "portfolio.component.html",
  styleUrls: ["portfolio.component.scss"],
})
export class PortfolioComponent {
  items = require("../../assets/items.json");

  constructor(public router: Router) {
  }
}
