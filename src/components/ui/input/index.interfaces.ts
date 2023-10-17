export type InputTypes = 'select' | 'phone' | 'password';

export type InputClasses = {
  input: string;
  label: string;
  container: string;
  icon: string;
};

export interface InputProps { 
  label: string;
  classes?: Partial<InputClasses>;
  isValid?: boolean;
}
