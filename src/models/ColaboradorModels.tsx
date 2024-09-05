import { ContatoRequest } from "./ContatoModels";

export interface ColaboradorRequest {
    id: string;
    nome: string;
    documento: string;
    dataNascimento: string;
    contato: ContatoRequest;
}