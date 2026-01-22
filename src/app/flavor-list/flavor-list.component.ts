import { Component, inject, OnInit } from "@angular/core";
import { FlavorService } from "../services/flavor.service";
import { Observable } from "rxjs";
import { Flavor } from "../models/Flavor";
import { AsyncPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-flavor-list",
  imports: [AsyncPipe, RouterLink],
  templateUrl: "./flavor-list.component.html",
  styleUrl: "./flavor-list.component.scss",
})
export class FlavorListComponent implements OnInit {
  private flavorService = inject(FlavorService);
  flavors!: Observable<Flavor[]>;

  ngOnInit(): void {
    this.flavors = this.flavorService.getFlavors();
  }
}
