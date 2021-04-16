export type HttpMethod =
  | 'post'
  | 'POST'
  | 'get'
  | 'GET'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE';

export type Headers = { [key: string]: string };

export type Params = { [key: string]: string };

export type HttpRequest = {
  method?: HttpMethod;
  data?: any;
  headers?: Headers;
  params?: Params;
};

export type HttpResponse<T = any> = {
  status: number;
  data?: T;
};

export interface HttpClient {
  request<T>(url: string, config?: HttpRequest): Promise<HttpResponse<T>>;
}
