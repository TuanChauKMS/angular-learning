import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {
  public task$!: Observable<Task | undefined>;
  public taskId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = parseInt(id, 10);
      this.task$ = this.taskService.getTaskById(this.taskId);
    } else {
      this.router.navigate(['/tasks']);
    }
  }

  public onToggleComplete(): void {
    this.taskService.toggleTaskComplete(this.taskId);
  }

  public onDelete(title: string): void {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      this.taskService.deleteTask(this.taskId);
      this.router.navigate(['/tasks']);
    }
  }

  public onBack(): void {
    this.router.navigate(['/tasks']);
  }

  public getPriorityClass(priority: string): string {
    return `priority-${priority}`;
  }
}
