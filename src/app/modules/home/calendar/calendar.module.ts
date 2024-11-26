import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar'; // Import CalendarModule and DateAdapter
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; // Import adapterFactory

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [CalendarModule], // Export CalendarModule for usage in other components
})
export class CalendarConfigModule { }
