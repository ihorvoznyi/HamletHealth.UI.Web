import { SVGProps } from 'react';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export type MoodType = 'great' | 'good' | 'meh' | 'bad' | 'awful';
