import { NgModule } from "@angular/core";
import { Cadastro } from "./components/cadastro/cadastro";
import { Consulta } from "./components/consulta/consulta";
import { Edicao } from "./components/edicao/edicao";
import { ProdutosRoutingModule } from "./produtos-routing.module";

@NgModule({
    declarations: [
        Cadastro,
        Consulta,
        Edicao
    ],
    imports: [
        ProdutosRoutingModule
    ]
})

export class ProdutosModule { }