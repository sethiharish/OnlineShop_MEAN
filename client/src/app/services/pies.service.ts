import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pie } from "../models/pie";

@Injectable({
  providedIn: "root",
})
export class PiesService {
  api = "/api/pies";
  constructor(private http: HttpClient) {}

  getPiesOfTheWeek(): Observable<Pie[]> {
    return this.http.get<Pie[]>(this.api + "?isPieOfTheWeek=true");
  }

  getPies(): Observable<Pie[]> {
    return this.http.get<Pie[]>(this.api);
  }

  getPieById(id: string): Observable<Pie> {
    return this.http.get<Pie>(`${this.api}/${id}`);
  }
}
