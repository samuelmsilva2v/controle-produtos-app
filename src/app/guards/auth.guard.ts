import { inject, Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync,
    Router, RouterStateSnapshot
} from "@angular/router";
import { UsuarioService } from "../core/services/usuario-service";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    router = inject(Router);
    service = inject(UsuarioService);
    
    canActivate() {
        if(this.service.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/autenticacao/login']);
            return false;
        }
    }
}