import { ContatoRequest, ContatoResponse } from './ContatoModels';
import { EnderecoRequest } from './EnderecoModels';

export interface ONGResponse {
  id: string;
  nome: string;
  image: string;
  instagram: string;
  documento: string;
  endereco: string;
  contato: ContatoResponse;
  chavePix?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ONGRequest {
    id: string;
    nome: string;
    instagram: string;
    documento: string;
    chavePix: string;
    contato: ContatoRequest;
    endereco: EnderecoRequest;
  }