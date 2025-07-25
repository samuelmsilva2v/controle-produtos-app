import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'autenticacao',
        canActivate: [AuthGuard],
        loadChildren: () => import
            ('./modules/autenticacao/autenticacao.module')
            .then(m => m.AutenticacaoModule)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import
            ('./modules/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
    },
    {
        path: 'estoques',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/estoques/estoques.module')
            .then(m => m.EstoquesModule)
    },
    {
        path: 'produtos',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/produtos/produtos.module')
            .then(m => m.ProdutosModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'autenticacao/login',
    }
];
