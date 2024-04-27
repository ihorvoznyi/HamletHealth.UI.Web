import { ISvgProps } from '@shared/lib/types';
import { ElementType } from 'react';

export type DescribeArcType = {
  x: number;
  y: number; 
  radius: number; 
  startAngle: number; 
  endAngle: number;
};

export type CalculatePositionParams = { 
  x: number; 
  y: number; 
  angle: number; 
  radius?: number; 
  multiplier?: number; 
};

export interface IChartData {
  color: string;
  percentage: number;
  MoodSvg: ElementType<ISvgProps>;
}