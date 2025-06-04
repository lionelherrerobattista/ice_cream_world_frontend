import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FlavorService } from "../services/flavor.service";
import { Flavor } from "../models/Flavor";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-flavor",
  imports: [ReactiveFormsModule],
  templateUrl: "./new-flavor.component.html",
  styleUrl: "./new-flavor.component.css",
})
export class NewFlavorComponent {
  private flavorService = inject(FlavorService);
  private router = inject(Router);
  newFlavorForm = new FormGroup({
    flavorName: new FormControl("", Validators.required),
    flavorDescription: new FormControl(""),
    flavorImage: new FormControl(""),
  });

  onSubmit() {
    const { flavorName, flavorDescription, flavorImage } =
      this.newFlavorForm.value;
    const newFlavor: Flavor = {
      name: flavorName || "",
      description: flavorDescription || "",
      photo: flavorImage || "",
    };

    // send data to backend
    this.flavorService.createFlavor(newFlavor).subscribe((res) => {
      console.log(res);

      // reset form
      this.newFlavorForm.reset();

      // redirect to details page ?
      this.router.navigate(["/flavor", res.id]);
    });
  }
}
