import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarModule } from 'angular-calendar';  // Import CalendarModule
import { CalendarMonthViewComponent } from 'angular-calendar';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule, SchedulerModule],  // Directly import CalendarModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line if needed

  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  public events = [
    {
      id: 1,
      start: new Date('2024-11-26T09:00:00'),
      end: new Date('2024-11-26T10:00:00'),
      title: 'Meeting with team',
    },
    {
      id: 2,
      start: new Date('2024-11-26T12:00:00'),
      end: new Date('2024-11-26T13:30:00'),
      title: 'Lunch with client',
    },
  ];
  viewDate: Date = new Date();


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('Initializing Calendar Component...');
    this.cdr.detectChanges(); // Ensure UI refresh
  }
}