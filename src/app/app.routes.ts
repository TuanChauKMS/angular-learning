import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';
import { TaskDetail } from './components/task-detail/task-detail';
import { About } from './components/about/about';
import { ApiDemo } from './components/api-demo/api-demo';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';
import {
  ROUTE_PATH_HOME,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_DASHBOARD,
  ROUTE_PATH_TASKS,
  ROUTE_PATH_TASKS_NEW,
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_API_DEMO,
} from './app.routes.constants';

export const routes: Routes = [
  {
    path: ROUTE_PATH_LOGIN,
    component: Login
  },
  {
    path: ROUTE_PATH_HOME,
    component: Home,
    pathMatch: 'full',
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATH_DASHBOARD,
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATH_TASKS,
    component: TaskList,
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATH_TASKS_NEW,
    component: TaskForm,
    canActivate: [authGuard]
  },
  {
    path: `${ROUTE_PATH_TASKS}/:id`,
    component: TaskDetail,
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATH_ABOUT,
    component: About,
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATH_API_DEMO,
    component: ApiDemo,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
