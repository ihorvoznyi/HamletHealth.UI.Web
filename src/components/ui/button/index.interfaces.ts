import { ReactNode } from 'react';

export type ButtonTypes = 'primary' | 'outlined' | 'inherit' | 'submit';

type ClassesType = {
  container: string;
  textColor: string;
  bgColor: string;
};

export interface ButtonProps extends Partial<Pick<HTMLButtonElement, 'type' | 'disabled'>> {
  variant?: ButtonTypes;
  children: ReactNode;
  className?: string;
  styles?: Partial<ClassesType>;

  onClick?: () => void;
}
