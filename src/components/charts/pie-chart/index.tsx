import { FC, useMemo } from 'react';

import { IChartData, calculateSliceAngles } from './lib';
import { classes } from './index.tailwind';

interface PropsType {
  data: IChartData[];
}

export const PieChart: FC<PropsType> = ({ data }) => {
  const sliceAngles = useMemo(() => calculateSliceAngles(data || []), []);

  return (
    <svg viewBox="0 0 100 100" style={classes.svg}>
      {sliceAngles.map(({ color, path, labelPosition, percentage, MoodSvg, iconPosition }, index) => (
        <g key={index}>
          <path fill={color} d={path} />
          <text x={labelPosition.x} y={labelPosition.y} style={classes.text} textAnchor="middle">
            %{percentage}
          </text>
          <MoodSvg x={iconPosition.x} y={iconPosition.y} color="white" width={7.3} height={7.3} />
        </g>
      ))}
    </svg>
  );
};
