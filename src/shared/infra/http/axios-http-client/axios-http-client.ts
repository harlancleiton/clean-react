import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from 'shared';

export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  async request<T>(
    url: string,
    config?: HttpRequest
  ): Promise<HttpResponse<T>> {
    const defaultMethod = 'GET';
    try {
      const response = await this.axiosInstance.request({
        url,
        method: defaultMethod,
        ...config
      });

      return response;
    } catch (error) {
      if (error.response) return error.response;

      throw error;
    }
  }
}
