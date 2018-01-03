import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/account/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EnrollBusinessBrandComponent} from './components/organiser/enroll-business-brand.component';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/scheduler/dashboard',
    pathMatch: 'full'
  }, {
    path: 'scheduler',
    redirectTo: '/scheduler/dashboard',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'scheduler',
    data: {
      breadcrumb: 'Scheduler'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      }, {
        path: 'enroll-business-brand',
        component: EnrollBusinessBrandComponent,
        data: {
          breadcrumb: 'Enroll Business Brand'
        }
      }
    ]
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: false});
