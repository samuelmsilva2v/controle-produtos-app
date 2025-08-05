import { NgModule } from "@angular/core";
import { Relatorios } from "./components/relatorios/relatorios";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { Navbar } from "../../components/shared/navbar/navbar";

@NgModule({
    declarations: [
        Relatorios
    ],
    imports: [
        Navbar,
        DashboardRoutingModule
    ]
})

export class DashboardModule { }