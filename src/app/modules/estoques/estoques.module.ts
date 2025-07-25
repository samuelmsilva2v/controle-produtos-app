import { NgModule } from "@angular/core";
import { Cadastro } from "./components/cadastro/cadastro";
import { Consulta } from "./components/consulta/consulta";
import { EstoquesRoutingModule } from "./estoques-routing.module";

@NgModule({
    declarations: [
        Cadastro,
        Consulta
    ],
    imports: [
        EstoquesRoutingModule
    ]
})

export class EstoquesModule { }