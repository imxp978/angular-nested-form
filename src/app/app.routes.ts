import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'position-tier',
  //   loadChildren: () =>
  //     import('./pages/position-tier/position-tier.routing').then(
  //       (m) => m.POSITION_TIER_ROUTES,
  //     ),
  // },
  // {
  //   path: 'promotion-policy',
  //   loadChildren: () =>
  //     import('./pages/promotion-policy/promotion-policy.routing').then(
  //       (m) => m.PROMITION_POLICY_ROUTES,
  //     ),
  // },
  {
    path: 'approval',
    loadChildren: () =>
      import('./pages/approval/approval.routing').then(
        (m) => m.APPROVAL_ROUTES,
      ),
  },
];
