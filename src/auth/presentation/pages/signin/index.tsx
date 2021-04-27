import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Header, Input } from 'shared';

import { Container } from './styles';
import { SignInProps, SignInFormData } from './types';

export function SignIn({ authentication }: SignInProps) {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<SignInFormData>();

  async function onSubmit({ email, password }: SignInFormData) {
    setLoading(true);

    console.log('formData: ', { email, password });
    await authentication.execute({ email, password });
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
