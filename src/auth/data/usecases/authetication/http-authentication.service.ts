import { Authentication, Credentials, User } from '~/auth';
import { HttpClient } from '~/shared';

export class HttpAuthenticationService implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async execute({ email, password }: Credentials): Promise<User> {
    try {
      const payload = { email, password };

      const response = await this.httpClient.request<User>('/auth/login', {
        method: 'POST',
        data: payload
      });

      if (response.data) return response.data;

      // TODO add error
      throw new Error();
    } catch (error) {
      throw error;
    }
  }
}
