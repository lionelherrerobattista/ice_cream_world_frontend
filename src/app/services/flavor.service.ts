import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Flavor } from "../models/Flavor";

@Injectable({
  providedIn: "root",
})
export class FlavorService {
  private http = inject(HttpClient);
  private baseUrl = "http://localhost:5299/api/flavor";

  getFlavors() {
    return this.http.get<Flavor[]>(this.baseUrl);
  }

  getFlavor(id: number) {
    return this.http.get<Flavor>(`${this.baseUrl}/${id}`);
  }

  createFlavor(newFlavor: Flavor) {
    return this.http.post<Flavor>(this.baseUrl, newFlavor);
  }

  editFlavor(editedFlavor: Flavor) {
    return this.http.put(`${this.baseUrl}/${editedFlavor.id}`, editedFlavor);
  }
}
