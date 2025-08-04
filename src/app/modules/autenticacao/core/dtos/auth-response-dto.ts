export interface AuthResponseDto {
    id: string;
    nome: string;
    email: string;
    foto: string;
    dataHoraAcesso: Date | string;
    accessToken: string;
    dataHoraExpiricacao: Date | string;
}