import { Routes } from '@angular/router';
import PublicLayout from './layouts/public-layout/public-layout';
import PrivateLayout from './layouts/private-layout/private-layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: PublicLayout,
    // canActivate: [authGuard],
    children: [],
  },
  {
    path: '',
    component: PrivateLayout,
    // canActivate: [publicGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login'),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
