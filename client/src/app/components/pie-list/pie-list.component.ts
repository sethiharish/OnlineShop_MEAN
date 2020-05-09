import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category";
import { Pie } from "../../models/pie";
import { CategoriesService } from "../../services/categories.service";
import { PiesService } from "../../services/pies.service";

@Component({
  selector: "app-pie-list",
  templateUrl: "./pie-list.component.html",
  styleUrls: ["./pie-list.component.css"],
})
export class PieListComponent implements OnInit {
  pies: Pie[];
  filteredPies: Pie[];
  categories: Category[];
  allCategory: Category = new Category("", "All Categories", "");
  selectedCategory: Category = this.allCategory;

  constructor(
    private categoriesService: CategoriesService,
    private piesService: PiesService
  ) {}

  ngOnInit() {
    this.piesService.getPies().subscribe((data) => {
      if (data && data.length > 0) {
        this.pies = data;
        this.filteredPies = data;
      }
    });
    this.categoriesService.getCategories().subscribe((data) => {
      if (data && data.length > 0) {
        this.categories = [this.allCategory, ...data];
      }
    });
  }

  onCategorySelected = (category) => {
    this.selectedCategory = category;
    this.filteredPies = this.pies.filter(
      (p) => category._id === "" || p.categoryId === category._id
    );
  };
}
