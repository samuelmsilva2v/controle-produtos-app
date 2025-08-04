export interface UsuarioModel {
    id: string;
    nome: string;
    email: string;
    accessToken: string;
    dataHoraExpiracao: Date | string;
}