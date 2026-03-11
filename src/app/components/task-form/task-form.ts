import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  public title = '';
  public description = '';
  public priority: TaskPriority = TaskPriority.MEDIUM;
  public dueDate: string = '';
  public priorityOptions = Object.values(TaskPriority);

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  public onSubmit(): void {
    if (this.isFormValid()) {
      const dueDate = this.dueDate ? new Date(this.dueDate) : undefined;
      this.taskService.addTask(
        this.title,
        this.description,
        this.priority,
        dueDate
      );
      this.router.navigate(['/tasks']);
    }
  }

  public isFormValid(): boolean {
    return this.title.trim().length > 0 && 
           this.description.trim().length > 0;
  }

  public onCancel(): void {
    if (confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
      this.router.navigate(['/tasks']);
    }
  }
}
