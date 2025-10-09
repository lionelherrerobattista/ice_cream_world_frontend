import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FlavorService } from "../services/flavor.service";
import { Flavor } from "../models/Flavor";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-flavor",
  imports: [TitleCasePipe],
  templateUrl: "./flavor.component.html",
  styleUrl: "./flavor.component.scss",
})
export class FlavorComponent implements OnInit {
  flavorId = "";
  flavor: Flavor | null = null;
  private activatedRoute = inject(ActivatedRoute);
  private flavorService = inject(FlavorService);
  private router = inject(Router);

  constructor() {
    // get id from route
    this.activatedRoute.params.subscribe((params) => {
      this.flavorId = params["id"];
    });
  }

  ngOnInit(): void {
    // get flavor's info from backend
    this.flavorService.getFlavor(this.flavorId).subscribe((res) => {
      // show details in view
      this.flavor = res;
    });
  }

  onEditClick() {
    this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
  }

  onDeleteClick() {
    // TODO: add admin check
    this.flavorService.deleteFlavor(this.flavorId).subscribe((res) => {
      console.log(res);

      this.router.navigate(["/home"]);
    });
  }
}
