import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Header, Input } from 'shared';

import { Container } from './styles';
import { SignInProps, SignInFormData } from './types';

export function SignIn({ authentication, setStorage }: SignInProps) {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<SignInFormData>();

  async function onSubmit({ email, password }: SignInFormData) {
    setLoading(true);

    const { accessToken, refreshToken } = await authentication.execute({
      email,
      password
    });

    await setStorage.set('accessToken', accessToken);
    await setStorage.set('refreshToken', refreshToken);
  }

  return (
    <Container>
      <Header />
      <div>SignIn</div>

      <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <Input label="Email" register={register} name="email" />
        <Input
          label="Senha"
          register={register}
          name="password"
          type="password"
        />

        <button type="submit">Login</button>

        {loading && <span>Carregando</span>}
      </Form>
    </Container>
  );
}
