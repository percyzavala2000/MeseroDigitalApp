import { AxiosAdapter } from './http/axios.adapter';
import { FetchAdapter } from './http/fech.adapter';


export const BASE_URL ='https://divine-nourishment-production-1d1e.up.railway.app'
    // 'http://192.168.18.9:8080';

export const meseroDBFetcher = new FetchAdapter({
  baseURL: `${BASE_URL}/api`,
  // baseURL: 'https://divine-nourishment-production-1d1e.up.railway.app/api',
  //baseURL: 'http://192.168.18.9:8080/api',
});

console.log(BASE_URL, 'BASE_URL desde meseroDB.adapter.ts');
