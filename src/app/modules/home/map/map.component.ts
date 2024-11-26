import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'map',
  standalone: true,
  imports: [MatCardModule, GoogleMapsModule],
  templateUrl: './map.component.html',
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 }; // Default center (San Francisco)
  zoom: number = 12; // Default zoom level
}
