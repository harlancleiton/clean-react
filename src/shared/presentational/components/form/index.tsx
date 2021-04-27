import React from 'react';

import { Container } from './styles';
import { FormProps } from './types';

export function Form<FormData>({
  onSubmit,
  handleSubmit,
  children
}: FormProps<FormData>) {
  return <Container onSubmit={handleSubmit(onSubmit)}>{children}</Container>;
}
