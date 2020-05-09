import { Component, OnInit, Input } from "@angular/core";
import { Pie } from "src/app/models/pie";

@Component({
  selector: "app-pie-card",
  templateUrl: "./pie-card.component.html",
  styleUrls: ["./pie-card.component.css"],
})
export class PieCardComponent implements OnInit {
  @Input("pie") pie: Pie;

  constructor() {}

  ngOnInit() {}
}
