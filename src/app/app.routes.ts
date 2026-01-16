import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'heroes',
    loadComponent: () => import('./pages/heroes-page/heroes-page').then((m) => m.HeroesPage),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/hero-detail/hero-detail').then((m) => m.HeroDetail),
  },
  {
    path: 'user-registration',
    loadComponent: () =>
      import('./pages/user-registration/user-registration.component').then(
        (m) => m.UserRegistrationComponent
      ),
  },
];
