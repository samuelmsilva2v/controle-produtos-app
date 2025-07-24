import { NgModule } from "@angular/core";
import { Relatorios } from "./components/relatorios/relatorios";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    declarations: [
        //Adicionar componentes do módulo
        Relatorios
    ],
    imports: [
        //Adicionar módulos necessários
        DashboardRoutingModule
    ]
})

export class DashboardModule { }