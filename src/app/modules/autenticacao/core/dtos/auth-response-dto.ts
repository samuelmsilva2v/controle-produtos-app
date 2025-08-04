export interface AuthResponseDto {
    id: string;
    nome: string;
    email: string;
    perfil: string;
    dataHoraAcesso: Date | string;
    dataHoraExpiracacao: Date | string;
    token: string;
}