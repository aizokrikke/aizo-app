import { Routes, RouterModule } from '@angular/router';
import { AizoComponent } from './aizo/aizo.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './guards/aizo';
import { AdminGuard } from './guards/admin';

export let ROUTES: Routes = [
  {
    // tslint:disable-next-line:indent
   path: '', redirectTo: 'show/home', pathMatch: 'full'
  },
  {
    path: 'show/:action',
    component: AizoComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'admin/:action',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forChild(ROUTES);
