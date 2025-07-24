import { NgModule } from "@angular/core";
import { Login } from "./components/login/login";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";

@NgModule({
    declarations: [
        Login
    ],
    imports: [
        AutenticacaoRoutingModule
    ]
})

export class AutenticacaoModule { }