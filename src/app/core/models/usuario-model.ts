export interface UsuarioModel {
    id: string;
    nome: string;
    email: string;
    perfil: string;
    token: string;
    dataHoraExpiracao: Date | string;
}