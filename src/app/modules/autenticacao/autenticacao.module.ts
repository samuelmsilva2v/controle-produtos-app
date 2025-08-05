import { NgModule } from "@angular/core";
import { Login } from "./components/login/login";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [
        Login
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AutenticacaoRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatError
    ]
})

export class AutenticacaoModule { }