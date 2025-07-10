
export abstract class  HttpAdapter{
  abstract get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
  
  
} 