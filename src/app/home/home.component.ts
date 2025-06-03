import { Component, inject } from '@angular/core';
import { FlavorService } from '../services/flavor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private flavorService = inject(FlavorService);
  private http = inject(HttpClient);

}
