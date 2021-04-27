import React from 'react';

import { Container } from './styles';
import { InputProps } from './types';

export function Input<FormData>({
  name,
  register,
  label,
  ...rest
}: InputProps<FormData>) {
  return (
    <Container>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
    </Container>
  );
}
