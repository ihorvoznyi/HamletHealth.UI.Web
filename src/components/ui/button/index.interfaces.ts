import { ReactNode } from 'react';

export type ButtonTypes = 'primary' | 'outlined' | 'inherit' | 'submit';

type ClassesType = {
  container: string;
  textColor: string;
  bgColor: string;
};

export interface ButtonProps {
  type?: ButtonTypes;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  styles?: Partial<ClassesType>;

  onClick: () => void;
}
