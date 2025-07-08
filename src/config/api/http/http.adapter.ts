
export abstract class  HttpAdapter{
  abstract get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
  abstract post<T>(url: string, data?: Record<string, unknown>, params?: Record<string, any>): Promise<T>;
  abstract put<T>(url: string, data?: Record<string, unknown>, params?: Record<string, any>): Promise<T>;
  abstract delete<T>(url: string, params?: Record<string, unknown>): Promise<T>;
  
} 