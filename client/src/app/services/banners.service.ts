import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Banner } from "../models/banner";

@Injectable({
  providedIn: "root",
})
export class BannersService {
  api = "/api/banners";
  constructor(private http: HttpClient) {}

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.api);
  }
}
