
export interface UserToken {
  id: string;
  email: string;
  claims: Claim[];
}
  
export interface Claim {
  value: string;
  type: string;
}
  
export interface AuthData {
  accessToken: string;
  expiresIn: number;
  userToken: UserToken;
}
export interface LoginRequest {
  email: string;
  senha: string;
}