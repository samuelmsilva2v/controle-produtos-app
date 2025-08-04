import { Injectable } from "@angular/core";
import { UsuarioModel } from "../models/usuario-model";

@Injectable({
    providedIn: 'root'
}) 
export class UsuarioService {

    private key: string = 'auth';
    
    salvarAutenticacao(usuario: UsuarioModel) {
        const json = JSON.stringify(usuario);
        sessionStorage.setItem(this.key, json);
    }
}