import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Observable } from 'rxjs';

type TaskStats = { total: number; completed: number; active: number };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public taskStats$!: Observable<TaskStats>;
  private readonly taskService = inject(TaskService);

  public ngOnInit(): void {
    this.taskStats$ = this.taskService.getTaskStats();
  }
}
