import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import JournalTooltip from './components/tooltip';

import { DataPoint, formatXAxisLabel, mapRate } from './utils';
import { healthIndicatorMap } from '@components/ui/common/journal-entries-carousel/mood-card/mood-item';

import type { KeyHealthIndicatorRate } from '@shared/lib/types';
import { classes } from './index.tailwind';

type TLinearChartProps = {
  data: DataPoint[];
};

const LinearChart: React.FC<TLinearChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="95%" height={274} className={classes.container}>
      {data.length ? (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 2" opacity={0.3} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickFormatter={formatXAxisLabel}
            className="text-[12px]"
            tickLine={false}
          />
          <YAxis domain={[0, 4]} axisLine={false} tick={renderCustomYAxisTick} tickLine={false} />
          <Tooltip content={JournalTooltip} />
          <Line
            type="linear"
            dataKey="rate"
            stroke="#323232"
            strokeWidth={2}
            connectNulls={false}
            dot={{ fill: '#323232', strokeWidth: 2 }}
          />
        </LineChart>
      ) : (
        <p className={classes.noData}>No data available.</p>
      )}
    </ResponsiveContainer>
  );
};

export default LinearChart;

const renderCustomYAxisTick = ({ payload, ...props }: CustomTickProps) => {
  const { Icon, color } = healthIndicatorMap[mapRate(payload.value) as KeyHealthIndicatorRate];

  const x = props.x - 30;
  const y = payload.value === 0 ? props.y - 18 : props.y - 12;

  return (
    <foreignObject x={x} y={y} width={24} height={24}>
      <Icon width={24} height={24} color={color} />
    </foreignObject>
  );
};

type CustomTickProps = {
  x: number;
  y: number;
  payload: {
    value: KeyHealthIndicatorRate;
  };
};

import { Dot } from 'recharts';

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: any;
}

const CustomDot: React.FC<CustomDotProps> = (props) => {
  const { cx, cy, payload } = props;

  if (payload && payload.gap) {
    return null;
  }

  return <Dot cx={cx} cy={cy} r={5} fill="#323232" />;
};
