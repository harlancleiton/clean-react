import { FormHTMLAttributes } from 'react';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

export interface FormProps<FormData>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit: SubmitHandler<FormData>;
}
