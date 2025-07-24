import { RouterModule, Routes } from "@angular/router";
import { Relatorios } from "./components/relatorios/relatorios";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: 'relatorios', component: Relatorios
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }