import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-portfolio",
  templateUrl: "item.component.html",
  styleUrls: ["item.component.scss"],
})
export class ItemComponent {

  items = require('../../assets/items.json');
  item = this.items.find(item => item.name === this.activatedRoute.snapshot.params.id);

  constructor(public activatedRoute: ActivatedRoute) {

  }

}
