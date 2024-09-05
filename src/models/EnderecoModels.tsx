export interface EnderecoResponse {
    cidade: string;
    estado: string;
    cep: string;
    logradouro: string;
    bairro: string;
    numero: number;
    complemento?: string;
    referencia?: string;
}

export interface EnderecoRequest {
    cidade: string;
    estado: string;
    cep: string;
    logradouro: string;
    bairro: string;
    numero: number;
    complemento: string | null;
    referencia: string | null;
}