import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NewFlavorComponent } from "./new-flavor/new-flavor.component";
import { FlavorComponent } from "./flavor/flavor.component";
import { EditFlavorComponent } from "./edit-flavor/edit-flavor.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "flavor/new",
    component: NewFlavorComponent,
    title: "Create New Flavor",
  },
  {
    path: "flavor/:id/edit",
    component: EditFlavorComponent,
    title: "Edit Flavor",
  },
  {
    path: "flavor/:id",
    component: FlavorComponent,
    title: "Flavor Details",
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Page Not Found",
  },
];
