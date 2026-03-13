import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { ROUTE_URL_DASHBOARD, QUERY_PARAM_RETURN_URL } from '../../app.routes.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public username = '';
  public password = '';
  public error = '';

  public onSubmit(): void {
    this.error = '';
    if (!this.username.trim()) {
      this.error = 'Please enter a username.';
      return;
    }
    const returnUrl = this.getReturnUrl();
    if (this.auth.login(this.username, this.password)) {
      this.router.navigateByUrl(returnUrl);
    } else {
      this.error = 'Invalid username or password. Try demo / demo or admin / admin.';
    }
  }

  private getReturnUrl(): string {
    const url = this.route.snapshot.queryParams[QUERY_PARAM_RETURN_URL];
    return url && typeof url === 'string' ? url : ROUTE_URL_DASHBOARD;
  }
}
