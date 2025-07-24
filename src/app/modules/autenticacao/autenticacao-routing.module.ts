import { RouterModule, Routes } from "@angular/router";
import { Login } from "./components/login/login";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: 'login', component: Login
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AutenticacaoRoutingModule { }