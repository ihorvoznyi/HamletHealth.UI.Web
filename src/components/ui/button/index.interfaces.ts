import { ReactNode } from "react";

export type ButtonTypes = 'primary' | 'outlined' | 'inherit';

type ClassesType = {
  container: string;
  content: string;
};

export interface ButtonProps {
  type?: ButtonTypes;
  children: ReactNode;
  className?: string;
  styles?: Partial<ClassesType>;

  onClick: () => void;
}
