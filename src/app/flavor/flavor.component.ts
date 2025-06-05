import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlavorService } from "../services/flavor.service";
import { Flavor } from "../models/Flavor";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-flavor",
  imports: [TitleCasePipe],
  templateUrl: "./flavor.component.html",
  styleUrl: "./flavor.component.css",
})
export class FlavorComponent implements OnInit {
  flavorId = "";
  flavor: Flavor | null = null;
  private activatedRoute = inject(ActivatedRoute);
  private flavorService = inject(FlavorService);

  constructor() {
    // get id from route
    this.activatedRoute.params.subscribe((params) => {
      this.flavorId = params["id"];
    });
  }

  ngOnInit(): void {
    // get flavor's info from backend
    this.flavorService.getFlavor(Number(this.flavorId)).subscribe((res) => {
      // show details in view
      this.flavor = res;
    });
  }
}
