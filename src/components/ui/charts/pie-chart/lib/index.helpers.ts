import { CalculatePositionParams, DescribeArcType, IChartData } from './index.interfaces';

export const calculateSliceAngles = (chartData: IChartData[]) => {
  let startAngle = 0;
  
  return chartData.map(({ value: percentage, color, MoodSvg }) => {
    const angle = (percentage / 100) * 360;
    const midAngle = startAngle + angle / 2;
    const slice = {
      color,
      MoodSvg,
      path: describeArc({ x: 50, y: 50, radius: 50, startAngle, endAngle: startAngle + angle }),
      iconPosition: calculatePosition({ x: 44, y: 46, angle: midAngle }),
      labelPosition: calculatePosition({ x: 48, y: 58, angle: midAngle }),
      percentage,
    };
    startAngle += angle;
    return slice;
  });
};

const describeArc = (params: DescribeArcType) => {
  const { x, y, startAngle, endAngle, radius } = params;

  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;

  const startX = x + radius * Math.cos(startRadians);
  const startY = y + radius * Math.sin(startRadians);

  const endX = x + radius * Math.cos(endRadians);
  const endY = y + radius * Math.sin(endRadians);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const pathData = [
    `M ${startX} ${startY}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    'L 50 50',
    `L ${startX} ${startY}`,
  ];

  return pathData.join(' ');
};

const calculatePosition = (params: CalculatePositionParams) => {
  const radius = params.radius ?? 50; // Same as the radius used in describeArc
  const labelRadius = radius * (params.multiplier ?? 0.7); // Adjust this value to control label position
  const labelX = params.x + labelRadius * Math.cos((params.angle * Math.PI) / 180);
  const labelY = params.y + labelRadius * Math.sin((params.angle * Math.PI) / 180);
  return { x: labelX, y: labelY };
};