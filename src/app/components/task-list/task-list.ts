import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task, TaskStatus } from '../../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  public tasks$!: Observable<Task[]>;
  public selectedFilter: TaskStatus = 'all';
  private readonly taskService = inject(TaskService);

  public ngOnInit(): void {
    this.loadTasks();
  }

  public loadTasks(): void {
    this.tasks$ = this.taskService.getTasksByStatus(this.selectedFilter);
  }

  public onFilterChange(filter: TaskStatus): void {
    this.selectedFilter = filter;
    this.loadTasks();
  }

  public onToggleComplete(id: number): void {
    this.taskService.toggleTaskComplete(id);
  }

  public onDeleteTask(id: number, title: string): void {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      this.taskService.deleteTask(id);
    }
  }

  public getPriorityClass(priority: string): string {
    return `priority-${priority}`;
  }
}
