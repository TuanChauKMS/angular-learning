import { Component, OnInit } from '@angular/core';
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
export class TaskForm implements OnInit {
  public taskForm!: FormGroup;
  public priorityOptions = Object.values(TaskPriority);
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      priority: [TaskPriority.MEDIUM, Validators.required],
      dueDate: ['']
    });
  }

  public get f() {
    return this.taskForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formValue = this.taskForm.value;
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
      priority: TaskPriority.MEDIUM
    });
  }
}
