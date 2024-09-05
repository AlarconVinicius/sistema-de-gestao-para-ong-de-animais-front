import { fetchPublic, fetchAdmin } from './config';
import { ApiResponse } from '../models/ApiModels';  
import { AnimalResponse } from '../models/AnimalModels';
  const publicUrl = '/animais';
  const adminUrl = '/animais/admin';
  
  const AnimaisServices = {
    // Métodos públicos
    getByIdPublic: async (id: string): Promise<ApiResponse<AnimalResponse>> => {
      try {
        const response = await fetchPublic.get<ApiResponse<AnimalResponse>>(`${publicUrl}/${id}`);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao buscar o animal.'],
        };
      }
    },
  
    getAllPublic: async (): Promise<ApiResponse<AnimalResponse[]>> => {
      try {
        const response = await fetchPublic.get<ApiResponse<{ list: AnimalResponse[] }>>(publicUrl);
        return {
          ...response.data,
          data: response.data.data?.list || [],
        };
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao buscar a lista de animais.'],
        };
      }
    },
  
    // Métodos administrativos
    getByIdAdmin: async (id: string): Promise<ApiResponse<AnimalResponse>> => {
      try {
        const response = await fetchAdmin.get<ApiResponse<AnimalResponse>>(`${adminUrl}/${id}`);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao buscar o animal (admin).'],
        };
      }
    },
  
    getAllAdmin: async (): Promise<ApiResponse<AnimalResponse[]>> => {
      try {
        const response = await fetchAdmin.get<ApiResponse<AnimalResponse[]>>(adminUrl);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao buscar a lista de animais (admin).'],
        };
      }
    },
  
    createAdmin: async (animalData: AnimalResponse): Promise<ApiResponse<AnimalResponse>> => {
      try {
        const response = await fetchAdmin.post<ApiResponse<AnimalResponse>>(adminUrl, animalData);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao criar o animal.'],
        };
      }
    },
  
    updateAdmin: async (id: string, animalData: AnimalResponse): Promise<ApiResponse<AnimalResponse>> => {
      try {
        const response = await fetchAdmin.put<ApiResponse<AnimalResponse>>(`${adminUrl}/${id}`, animalData);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao atualizar o animal.'],
        };
      }
    },
  
    deleteAdmin: async (id: string): Promise<ApiResponse<null>> => {
      try {
        const response = await fetchAdmin.delete<ApiResponse<null>>(`${adminUrl}/${id}`);
        return response.data;
      } catch (error: any) {
        return {
          statusCode: error.response?.status || 500,
          success: false,
          data: null,
          errors: [error.response?.data?.message || 'Erro ao deletar o animal.'],
        };
      }
    },
  };
  
  export default AnimaisServices;
  
// import { fetchPublic, fetchAdmin } from "./config";

// const publicUrl = "/animais";
// const adminUrl = "/animais/admin";
// const AnimaisServices = {
//     // Métodos públicos
//     getByIdPublic: async (id) => {
//         try {
//             const response = await fetchPublic.get(`${publicUrl}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao buscar o animal.');
//         }
//     },

//     getAllPublic: async () => {
//         try {
//             const response = await fetchPublic.get(publicUrl);
//             return response.data.data.list;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao buscar a lista de animais.');
//         }
//     },

//     // Métodos administrativos
//     getByIdAdmin: async (id) => {
//         try {
//             const response = await fetchAdmin.get(`${adminUrl}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao buscar o animal (admin).');
//         }
//     },

//     getAllAdmin: async () => {
//         try {
//             const response = await fetchAdmin.get(adminUrl);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao buscar a lista de animais (admin).');
//         }
//     },

//     createAdmin: async (animalData) => {
//         try {
//             const response = await fetchAdmin.post(adminUrl, animalData);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao criar o animal.');
//         }
//     },

//     updateAdmin: async (id, animalData) => {
//         try {
//             const response = await fetchAdmin.put(`${adminUrl}/${id}`, animalData);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao atualizar o animal.');
//         }
//     },

//     deleteAdmin: async (id) => {
//         try {
//             const response = await fetchAdmin.delete(`${adminUrl}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.response?.data?.message || 'Erro ao deletar o animal.');
//         }
//     }
// };

// export default AnimaisServices;
