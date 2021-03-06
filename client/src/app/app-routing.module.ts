import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PieDetailComponent } from "./components/pie-detail/pie-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { PieListComponent } from "./components/pie-list/pie-list.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "pies/:id", component: PieDetailComponent },
  { path: "pies", component: PieListComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
