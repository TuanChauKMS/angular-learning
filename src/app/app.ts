import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title = 'Angular Learning App';
  public navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/tasks', label: 'Tasks', exact: false },
    { path: '/about', label: 'About', exact: false }
  ];
}
