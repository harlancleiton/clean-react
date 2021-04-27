import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

export interface InputProps<FormData>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<FormData>;
  register: UseFormRegister<FormData>;
  error?: string;
}
