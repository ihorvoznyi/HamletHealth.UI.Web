import { CustomInputRef } from '../input/index.interfaces';

export interface SelectRef extends CustomInputRef, Omit<HTMLInputElement, 'focus'> {}

export type Option = {
  value: string | number;
  label: string;
}