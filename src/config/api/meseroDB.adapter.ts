

import { AxiosAdapter } from './http/axios.adapter';
import { FetchAdapter } from './http/fech.adapter';

export const meseroDBFetcher=new   FetchAdapter({
  baseURL: 'http://192.168.18.9:8080/api',

})

