import { fetchPublic } from "./config";
import localStorageUtils from "../utils/LocalStorageUtils";
import { ApiResponse } from "../models/ApiModels";
import { AuthData } from "../models/AuthModels"; 
import { SolicitacaoCadastroRequest } from "../models/SolicitacaoCadastroModels";
import { LoginRequest } from "../models/AuthModels";

const publicUrl = "/identities";


const AuthServices = {
    login: async (login: LoginRequest): Promise<AuthData> => {
        try {
            const response = await fetchPublic.post<ApiResponse<AuthData>>(`${publicUrl}/login`, login);
            console.log(response.data.data);
            localStorageUtils.saveLocalUserData(response.data);
            return response.data.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.errors?.[0] || 'Erro ao tentar realizar login.');
        }
    },
    cadastrar: async (cadastro: SolicitacaoCadastroRequest): Promise<void> => {
        try {
            const response = await fetchPublic.post<ApiResponse<void>>(`${publicUrl}/cadastrar`, cadastro);
            return response.data.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.errors?.[0] || 'Erro ao tentar realizar login.');
        }
    },
};

export default AuthServices;

// import { fetchPublic } from "./config";
// import localStorageUtils from "../utils/LocalStorageUtils";

// const publicUrl = "/identities";
// const AuthServices = {
//     login: async (login) => {
//         try {
//             const response = await fetchPublic.post(`${publicUrl}/login`, login);
//             console.log(response.data.data);
//             localStorageUtils.saveLocalUserData(response.data);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.errors?.[0] || 'Erro ao tentar realizar login.');
//         }
//     }
// };

// export default AuthServices;
