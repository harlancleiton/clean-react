import {
  Authentication,
  Credentials,
  Login,
  InvalidCredentialsError
} from 'auth';
import { HttpClient, UnexpectedError } from 'shared';

export class HttpAuthenticationService implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async execute({ email, password }: Credentials): Promise<Login> {
    const payload = { email, password };

    const response = await this.httpClient.request<Login>('/auth/login', {
      method: 'POST',
      data: payload
    });

    switch (response.status) {
      case 200:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return response.data;
      case 401:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
