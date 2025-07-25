import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Cadastro } from "./components/cadastro/cadastro";
import { Consulta } from "./components/consulta/consulta";
import { Edicao } from "./components/edicao/edicao";

export const routes: Routes = [
    {
        path: 'cadastro', component: Cadastro
    },
    {
        path: 'consulta', component: Consulta
    },
    {
        path: 'edicao', component: Edicao
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ProdutosRoutingModule { }