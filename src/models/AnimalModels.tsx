export interface AnimalResponse {
    id: string;
    ongId: string;
    nome: string;
    especie: string;
    raca: string;
    sexo: boolean;
    castrado: boolean;
    cor: string;
    porte: string;
    idade: string;
    descricao: string;
    ong: string;
    endereco: string;
    observacao: string;
    chavePix?: string;
    foto: string;
    createdAt: Date;
    updatedAt: Date;
}