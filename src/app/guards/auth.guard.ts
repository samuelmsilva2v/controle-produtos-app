import { inject, Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync,
    Router, RouterStateSnapshot
} from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    router = inject(Router);
    
    canActivate() {
        this.router.navigate(['/autenticacao/login']);
        return false;
    }
}