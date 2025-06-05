import { Component } from "@angular/core";
import { FlavorListComponent } from "../flavor-list/flavor-list.component";

@Component({
  selector: "app-home",
  imports: [FlavorListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
