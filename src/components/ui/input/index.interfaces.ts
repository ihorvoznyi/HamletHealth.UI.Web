import { ChangeEvent } from "react";

export type InputTypes = 'text' | 'password' | 'phone';

export type CustomInputRef = {
  focus: () => void;
  getCursorPosition: () => number | null;
}

export type InputClasses = {
  input: string;
  label: string;
  container: string;
  icon: string;
};

export interface InputProps {
  type?: 'text' | 'password';
  label: string;
  styles?: Partial<InputClasses>;
  isValid?: boolean;
}

export interface FieldProps {
  type: InputTypes;
  value: string;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  className?: string;
}
