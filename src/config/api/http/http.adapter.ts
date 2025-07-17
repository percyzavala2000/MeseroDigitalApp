
export abstract class  HttpAdapter{
  abstract get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
  abstract post<T>(url: string, data?: any, params?: Record<string, any>): Promise<T>;
  
  
} 