import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'autenticacao',
        loadChildren: () => import
            ('./modules/autenticacao/autenticacao.module')
            .then(m => m.AutenticacaoModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import
            ('./modules/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
    },
    {
        path: '',
        pathMatch: 'full', 
        redirectTo: 'autenticacao/login', 
    }
];
