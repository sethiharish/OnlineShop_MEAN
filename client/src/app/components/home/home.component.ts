import { Component, OnInit } from "@angular/core";
import { PiesService } from "../../services/pies.service";
import { BannersService } from "../../services/banners.service";
import { Banner } from "../../models/banner";
import { Pie } from "../../models/pie";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  selectedBanner: Banner = { id: 0, name: "", imageUrl: "", description: "" };
  pies: Pie[];

  constructor(
    private bannersService: BannersService,
    private piesService: PiesService
  ) {}

  ngOnInit() {
    this.bannersService.getBanners().subscribe((data) => {
      if (data && data.length > 0) {
        this.banners = data;
        this.selectedBanner = data[0];
      }
    });
    this.piesService.getPiesOfTheWeek().subscribe((data) => {
      if (data && data.length > 0) {
        this.pies = data;
      }
    });
  }
}
