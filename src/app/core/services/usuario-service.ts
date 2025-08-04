import { Injectable } from "@angular/core";
import { UsuarioModel } from "../models/usuario-model";
import CryptoJS from "crypto-js";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private sessionKey: string = 'auth';
    private cryptoKey: string = '35b8d782-6968-45e3-a87a-c2892221602e'

    signIn(usuario: UsuarioModel) {
        const json = JSON.stringify(usuario);

        const crypto = CryptoJS.AES.encrypt(json, this.cryptoKey).toString();

        sessionStorage.setItem(this.sessionKey, crypto);
    }

    isAuthenticated(): boolean {
        const crypto = sessionStorage.getItem(this.sessionKey);

        if (!crypto) {
            return false;
        }

        try {
            const bytes = CryptoJS.AES.decrypt(crypto, this.cryptoKey);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            
            if (!decrypted) {
                return false;
            }
            
            const usuario: UsuarioModel = JSON.parse(decrypted);
           
            if (!usuario.token) {
                return false;
            }
            
            const now = new Date();
            const expiration = new Date(usuario.dataHoraExpiracao);

            if (isNaN(expiration.getTime())) {
                return false;
            }

            return expiration > now;
        } catch (e) {
            console.error("Erro ao verificar autenticação:", e);
            return false;
        }
    }

    getData(): UsuarioModel | null {
        const crypto = sessionStorage.getItem(this.sessionKey);

        if(crypto) {
            const bytes = CryptoJS.AES.decrypt(crypto, this.cryptoKey);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);

            return JSON.parse(decrypted) as UsuarioModel;
        }

        return null;
    }

    getToken(): string | null {
        const data = this.getData();

        if(data) {
            return data.token;
        }

        return null;
    }

    signOut() {
        sessionStorage.removeItem(this.sessionKey);
    }
}