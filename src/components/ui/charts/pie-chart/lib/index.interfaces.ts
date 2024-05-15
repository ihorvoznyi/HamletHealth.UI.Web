import { KeyHealthIndicator } from '@app/store/entities/patient/model/types';

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
  value: number;
  percentage: number;
  rate: KeyHealthIndicator
}