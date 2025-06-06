import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FlavorService } from "../services/flavor.service";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Flavor } from "../models/Flavor";

@Component({
  selector: "app-edit-flavor",
  imports: [ReactiveFormsModule],
  templateUrl: "./edit-flavor.component.html",
  styleUrl: "./edit-flavor.component.css",
})
export class EditFlavorComponent implements OnInit {
  flavorId = "";
  editFlavorForm = new FormGroup({
    flavorName: new FormControl("", Validators.required),
    flavorDescription: new FormControl(""),
    flavorPhoto: new FormControl(""),
  });
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private flavorService = inject(FlavorService);

  constructor() {
    // get id
    this.activatedRoute.params.subscribe((params) => {
      this.flavorId = params["id"];
    });
  }

  ngOnInit(): void {
    // load flavor
    this.flavorService.getFlavor(this.flavorId).subscribe((flavor) => {
      // set values in the form
      this.editFlavorForm.setValue({
        flavorName: flavor.name,
        flavorDescription: flavor.description || "",
        flavorPhoto: flavor.photo || "",
      });
    });
  }

  onSubmit() {
    const { flavorName, flavorDescription, flavorPhoto } =
      this.editFlavorForm.value;

    const editedFlavor: Flavor = {
      id: this.flavorId,
      name: flavorName || "",
      description: flavorDescription || "",
      photo: flavorPhoto || "",
    };

    // send put request to backend
    this.flavorService.editFlavor(editedFlavor).subscribe(() => {
      // redirect to description page
      this.router.navigate([".."], { relativeTo: this.activatedRoute });
    });
  }
}
