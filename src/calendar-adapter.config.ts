import { Provider } from '@angular/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DateAdapter } from 'angular-calendar';

export const CALENDAR_PROVIDERS: Provider[] = [
  {
    provide: DateAdapter,
    useFactory: adapterFactory,
  },
];
