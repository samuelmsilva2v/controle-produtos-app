import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Cadastro } from "./components/cadastro/cadastro";
import { Consulta } from "./components/consulta/consulta";

export const routes: Routes = [
    {
        path: 'cadastro', component: Cadastro
    },
    {
        path: 'consulta', component: Consulta
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class EstoquesRoutingModule { }