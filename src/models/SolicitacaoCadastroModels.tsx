import { ColaboradorRequest } from "./ColaboradorModels";
import { ONGRequest } from "./ONGModels";

export interface SolicitacaoCadastroRequest {
    ong: ONGRequest;
    responsavel: ColaboradorRequest;
    status: number;
}