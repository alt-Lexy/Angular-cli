import { Routes } from '@angular/router';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyComponent } from './pages/company/company.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: CompanyListComponent
    },
    {
        path: 'company',
        children: [
            {
                path: '',
                component: CompanyComponent
            },
            {
                path: ':id',
                component: CompanyComponent
            }
        ]

    },
    {
        path: '**',
        component: NotFoundComponent
    }];
