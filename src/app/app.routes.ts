import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'approval', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'approval',
    loadChildren: () =>
      import('./pages/approval/approval.routing').then(
        (m) => m.APPROVAL_ROUTES,
      ),
  },
];
