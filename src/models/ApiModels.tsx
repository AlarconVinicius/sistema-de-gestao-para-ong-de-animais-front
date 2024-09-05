export interface ApiResponse<T = any> {
  statusCode: number;
  success: boolean;
  data: T | null;
  errors: string[] | null;
}