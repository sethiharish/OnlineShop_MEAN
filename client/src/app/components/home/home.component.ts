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
  bannerComponentName = "Banner";
  bannerDataLoading = true;
  bannerDataError: Error;
  banners: Banner[];
  selectedBanner = new Banner("", "", "", "");

  pieComponentName = "Pie";
  pieDataLoading = true;
  pies: Pie[];
  pieDataError: Error;

  showComponentName = true;

  constructor(
    private bannersService: BannersService,
    private piesService: PiesService
  ) {}

  ngOnInit() {
    this.bannersService.getBanners().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.banners = data;
          this.selectedBanner = data[0];
        }
      },
      (error: Error) => {
        this.bannerDataError = error;
      }
    );
    this.piesService.getPiesOfTheWeek().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.pies = data;
          this.pieDataLoading = false;
        }
      },
      (error: Error) => {
        this.pieDataError = error;
      }
    );
  }

  onBannerLoad() {
    this.bannerDataLoading = false;
  }

  onPieLoad(pie) {
    pie.isLoaded = true;
  }
}
