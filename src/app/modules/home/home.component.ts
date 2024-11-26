import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    CalendarComponent,
    MapComponent,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MissionComponent
  ],
})
export class HomeComponent {
  currentView: 'list' | 'grid' = 'list';

  // Function to switch views
  setView(view: 'list' | 'grid') {
    this.currentView = view;
  }
}
