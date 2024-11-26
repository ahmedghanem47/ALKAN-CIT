import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-mission',
  imports: [MatCardModule, MatInputModule, MatPaginatorModule,
    MatMenuModule,
    MatButtonModule, MatListModule,
    MatIconModule, MatChipsModule, CommonModule],
  templateUrl: './mission.component.html',
})
export class MissionComponent {
  menuOpen = false;

  missions = [
    {
      title: 'Review Sheet-(RefNo_0054)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Reactive', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0053)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Reactive', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Mon Nov 04 2024-(RefNo_0052)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Reactive', color: 'warn' },
        { label: 'Pending On Reviewer', color: 'pending' },
        { label: 'High', color: 'primary' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0051)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Routine', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0051)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Routine', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0051)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Routine', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0051)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Routine', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
    {
      title: 'Review Sheet-(RefNo_0051)',
      category: 'Design Compliance',
      statuses: [
        { label: 'Routine', color: 'warn' },
        { label: 'Delayed', color: 'accent' },
      ],
    },
  ];
}
