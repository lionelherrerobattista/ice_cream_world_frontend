import { Component, inject, OnInit } from '@angular/core';
import { FlavorService } from '../services/flavor.service';
import { Flavor } from '../models/Flavor';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private flavorService = inject(FlavorService);
  flavors!: Observable<Flavor[]>;

  constructor() {
    this.flavors = this.flavorService.getFlavors();
  }
}
