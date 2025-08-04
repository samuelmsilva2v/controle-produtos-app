import { NgModule } from "@angular/core";
import { Login } from "./components/login/login";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        Login
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AutenticacaoRoutingModule,
        MatButtonModule
    ]
})

export class AutenticacaoModule { }