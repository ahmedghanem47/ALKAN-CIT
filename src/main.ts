/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CALENDAR_PROVIDERS } from './calendar-adapter.config'
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(),
  provideRouter(routes),
  ...CALENDAR_PROVIDERS, // Spread the calendar providers here
  ],
});
