import { SVGProps } from 'react';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export type MoodType = 'great' | 'good' | 'meh' | 'bad' | 'awful';

export type RecordOf<T extends string | number | symbol, V> = {
  [key in T]: V
}

export enum GenderEnum {
  MALE = '0',
  FEMALE = '1'
}