import { HttpAdapter } from './http.adapter';


interface Options {  
  baseURL: string;
  params?: Record<string, string>;
};

export class FetchAdapter extends HttpAdapter {
  private baseURL: string;
  private params?: Record<string, string>;

  constructor(options: Options) {
    super();
    this.baseURL = options.baseURL;
 
  }
  //Metodo get que recibe una url y un objeto de opciones
  //y devuelve una promesa de tipo T
  //El objeto de opciones puede contener headers, body, etc.
  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    const urlWithParams = new URL(url, this.baseURL);
   
    try {
      const response = await fetch(urlWithParams.toString(), options);
      const data = await response.json();
      console.log('desde fetch.adapter',data)
      return data;
    } catch (error) {
      throw new Error(`error fetching get:${url} ${error}`);
    }
  }
  post<T>(
    url: string,
    data?: Record<string, unknown>,
    params?: Record<string, any>,
  ): Promise<T> {
    throw new Error('Method not implemented.');
  }
  put<T>(
    url: string,
    data?: Record<string, unknown>,
    params?: Record<string, any>,
  ): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  // Implement other methods as needed


 
}