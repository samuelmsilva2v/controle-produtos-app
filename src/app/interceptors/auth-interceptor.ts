import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UsuarioService } from "../core/services/usuario-service";
import { inject } from "@angular/core";

const endpoints: string[] = [
    environment.apiDashboard,
    environment.apiEstoques,
    environment.apiProdutos
];

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

    const service = inject(UsuarioService);

    const token = service.getToken();

    const auth = endpoints.some(endpoint => 
        req.url.startsWith(endpoint)
    );

    if(!auth) {
        return next(req);
    }

    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });

    return next(authReq);
}