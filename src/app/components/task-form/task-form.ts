import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  public priorityOptions = Object.values(TaskPriority);
  public submitted = false;
  private readonly fb = inject(FormBuilder);
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  public readonly titleControl = this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]);
  public readonly descriptionControl = this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)]);
  public readonly priorityControl = this.fb.nonNullable.control(TaskPriority.MEDIUM, [Validators.required]);
  public readonly dueDateControl = this.fb.control<string | null>(null);
  public readonly taskForm: FormGroup = this.fb.group({
    title: this.titleControl,
    description: this.descriptionControl,
    priority: this.priorityControl,
    dueDate: this.dueDateControl,
  });

  public onSubmit(): void {
    this.submitted = true;

    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formValue = this.taskForm.getRawValue();
    const dueDate = formValue.dueDate ? new Date(formValue.dueDate) : undefined;

    this.taskService.addTask(
      formValue.title,
      formValue.description,
      formValue.priority,
      dueDate
    );

    this.router.navigate(['/tasks']);
  }

  public onCancel(): void {
    if (this.taskForm.dirty) {
      if (confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
        this.router.navigate(['/tasks']);
      }
    } else {
      this.router.navigate(['/tasks']);
    }
  }

  public onReset(): void {
    this.submitted = false;
    this.taskForm.reset({
      title: '',
      description: '',
      priority: TaskPriority.MEDIUM,
      dueDate: null,
    });
  }
}
