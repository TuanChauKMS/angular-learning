import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  public appName = 'Angular Learning App';
  public version = '1.0.0';
  
  public concepts = [
    {
      title: 'Components',
      description: 'Building blocks of Angular applications with TypeScript classes, HTML templates, and CSS styles',
      icon: '🧩'
    },
    {
      title: 'Modules',
      description: 'Containers for organizing related components, services, and other code (using standalone components in this app)',
      icon: '📦'
    },
    {
      title: 'Services',
      description: 'Classes with specific purposes like data access, logging, or business logic',
      icon: '⚙️'
    },
    {
      title: 'Dependency Injection',
      description: 'Design pattern where Angular provides required dependencies automatically',
      icon: '💉'
    },
    {
      title: 'Routing',
      description: 'Navigation between different views without page reloads',
      icon: '🗺️'
    },
    {
      title: 'Observables & RxJS',
      description: 'Reactive programming for handling asynchronous data streams',
      icon: '🌊'
    }
  ];

  public features = [
    'TypeScript for type safety',
    'Component-based architecture',
    'Reactive state management with RxJS',
    'Template-driven forms',
    'Client-side routing',
    'Service dependency injection'
  ];
}
