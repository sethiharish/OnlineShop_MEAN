import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pie } from "src/app/models/pie";

@Component({
  selector: "app-pie-card",
  templateUrl: "./pie-card.component.html",
  styleUrls: ["./pie-card.component.css"],
})
export class PieCardComponent implements OnInit {
  @Input("pie") pie: Pie;
  @Output("onLoad") onLoad = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onImageLoad() {
    this.onLoad.emit(this.pie);
  }
}
