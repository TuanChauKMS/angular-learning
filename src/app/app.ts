import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import {
  ROUTE_URL_HOME,
  ROUTE_URL_TASKS,
  ROUTE_URL_API_DEMO,
  ROUTE_URL_DASHBOARD,
  ROUTE_URL_ABOUT,
} from './app.routes.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly auth = inject(AuthService);

  public readonly isLoggedIn$ = this.auth.isLoggedIn$;
  public title = 'Angular Learning App';
  public navItems = [
    { path: ROUTE_URL_HOME, label: 'Home', exact: true },
    { path: ROUTE_URL_TASKS, label: 'Tasks', exact: false },
    { path: ROUTE_URL_API_DEMO, label: 'API Demo', exact: false },
    { path: ROUTE_URL_DASHBOARD, label: 'Dashboard', exact: false },
    { path: ROUTE_URL_ABOUT, label: 'About', exact: false }
  ];
}
