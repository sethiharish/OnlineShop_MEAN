import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PieListComponent } from "./components/pie-list/pie-list.component";
import { HomeComponent } from "./components/home/home.component";
import { PieCardComponent } from "./components/pie-card/pie-card.component";
import { PieDetailComponent } from "./components/pie-detail/pie-detail.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProgressIndicatorComponent } from "./components/common/progress-indicator/progress-indicator.component";
import { ErrorIndicatorComponent } from "./components/common/error-indicator/error-indicator.component";
import { ListGroupComponent } from "./components/common/list-group/list-group.component";

@NgModule({
  declarations: [
    AppComponent,
    PieListComponent,
    HomeComponent,
    PieCardComponent,
    PieDetailComponent,
    NavbarComponent,
    NotFoundComponent,
    ProgressIndicatorComponent,
    ErrorIndicatorComponent,
    ListGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
