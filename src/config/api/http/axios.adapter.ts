import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
  baseURL: string;
  params?: Record<string, string>;
}

export class AxiosAdapter extends HttpAdapter {
  private axiosInstance: AxiosInstance;
  constructor(options: Options) {
    super();
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  async get<T>(
  url: string,
  options?: Record<string, unknown> | undefined,
): Promise<T> {
  try {
    const resp = await this.axiosInstance.get<T>(url, options);
    console.log('desde axios.adapter', resp.data);
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud Axios:', error.message, error.response);
      throw error; // Relanzar el error original
    } else {
      console.error('Error inesperado:', error);
      throw error; // Relanzar el error original
    }
  }
}
  async post<T>(
    url: string,
    data?: Record<string, unknown>,
    params?: Record<string, any>,
  ): Promise<T> {
    try {
      const resp = await this.axiosInstance.post<T>(url, data, { params });
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error en la solicitud Axios:', error.message, error.response);
        throw error; // Relanzar el error original
      } else {
        console.error('Error inesperado:', error);
        throw error; // Relanzar el error original
      }
    }
  }
  
}
