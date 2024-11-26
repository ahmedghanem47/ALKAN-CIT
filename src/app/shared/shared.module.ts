import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  exports: [],
})
export class SharedModule { }
