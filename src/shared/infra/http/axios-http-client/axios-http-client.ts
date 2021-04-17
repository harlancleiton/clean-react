import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { HttpClient, HttpRequest, HttpResponse } from '~/shared/data';

export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  async request<T>(
    url: string,
    config?: HttpRequest
  ): Promise<HttpResponse<T>> {
    try {
      const response = await this.axiosInstance.request({ url, ...config });

      return response;
    } catch (error) {
      if (error.response) return error.response;

      throw error;
    }
  }
}
