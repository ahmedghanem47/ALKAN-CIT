import { Component } from '@angular/core';
import { LayoutComponent } from './shared/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() { }


}
