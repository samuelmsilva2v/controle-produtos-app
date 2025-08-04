import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthRequestDto } from "../dtos/auth-request-dto";
import { Observable, tap } from "rxjs";
import { AuthResponseDto } from "../dtos/auth-response-dto";
import { UsuarioService } from "../../../../core/services/usuario-service";
import { environment } from "../../../../../environments/environment";
import { UsuarioModel } from "../../../../core/models/usuario-model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient);
    private usuarioService = inject(UsuarioService);

    private apiUrl = environment.apiAutenticacao;

    login(request: AuthRequestDto): Observable<AuthResponseDto> {
        return this.http.post<AuthResponseDto>(this.apiUrl, request).pipe(
            tap(response => {
                const usuario: UsuarioModel = {
                    id: response.id,
                    nome: response.nome,
                    email: response.email,
                    perfil: response.perfil,
                    dataHoraExpiracao: response.dataHoraExpiracacao,
                    token: response.token
                };
                this.usuarioService.salvarAutenticacao(usuario);
            })
        )
    }
}