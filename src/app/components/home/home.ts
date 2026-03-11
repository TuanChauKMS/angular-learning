import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public taskStats$!: Observable<{ total: number; completed: number; active: number }>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskStats$ = this.taskService.getTaskStats();
  }
}
