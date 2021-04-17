import {
  Authentication,
  Credentials,
  User,
  InvalidCredentialsError
} from '~/auth';
import { HttpClient, UnexpectedError } from '~/shared';

export class HttpAuthenticationService implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async execute({ email, password }: Credentials): Promise<User> {
    const payload = { email, password };

    const response = await this.httpClient.request<User>('/auth/login', {
      method: 'POST',
      data: payload
    });

    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
