import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputTypes = 'text' | 'password' | 'phone' | 'textarea';

export type CustomInputRef = {
  focus: () => void;
}

export type InputClasses = {
  container: string;
  input: string;
  label: string;
  icon: string;
};

export interface InputWrapperProps extends Pick<FieldProps, 'error'> {
  type?: 'text' | 'password';
  label: string;
  styles?: Partial<InputClasses>;
  isValid?: boolean;
}

export interface FieldProps {
  type: InputTypes;
  value: string;
  error?: string;
  className?: string;

  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
