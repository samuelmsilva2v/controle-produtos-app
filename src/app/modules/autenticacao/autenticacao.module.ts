import { NgModule } from "@angular/core";
import { Login } from "./components/login/login";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        Login
    ],
    imports: [
        AutenticacaoRoutingModule,
        MatButtonModule
    ]
})

export class AutenticacaoModule { }