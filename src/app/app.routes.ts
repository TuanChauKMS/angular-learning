import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';
import { TaskDetail } from './components/task-detail/task-detail';
import { About } from './components/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TaskList
  },
  {
    path: 'tasks/new',
    component: TaskForm
  },
  {
    path: 'tasks/:id',
    component: TaskDetail
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
