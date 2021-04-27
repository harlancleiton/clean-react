import React from 'react';
import { useForm } from 'react-hook-form';

import { Authentication } from 'auth/domain';
import { Form, Header, Input } from 'shared';

import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

interface SignInProps {
  authetication: Authentication;
}

export function SignIn({ authetication }: SignInProps) {
  const { register, handleSubmit } = useForm<SignInFormData>();

  async function onSubmit({ email, password }: SignInFormData) {
    await authetication.execute({ email, password });
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
      </Form>
    </Container>
  );
}
