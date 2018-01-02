import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/account/login.component';

const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: false});
