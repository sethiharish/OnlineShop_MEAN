import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PiesService } from "../../services/pies.service";
import { Pie } from "../../models/pie";

@Component({
  selector: "app-pie-detail",
  templateUrl: "./pie-detail.component.html",
  styleUrls: ["./pie-detail.component.css"],
})
export class PieDetailComponent implements OnInit {
  pie: Pie = new Pie("", "", 0, "", "", false, false, "", "", "", "");
  constructor(
    private route: ActivatedRoute,
    private piesService: PiesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        this.piesService.getPieById(params.get("id")).subscribe((data) => {
          if (data) {
            this.pie = data;
          }
        });
      }
    });
  }
}
