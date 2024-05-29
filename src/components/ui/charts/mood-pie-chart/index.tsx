import React, { ElementType } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoodAwfulSvg, MoodMehSvg, MoodBadSvg, MoodGoodSvg, MoodGreatSvg } from '@components/ui/svg';
import { ISvgProps, KeyHealthIndicatorRate } from '@shared/lib/types';
import { KhiStatisticsItem } from '@app/store/entities/patient/model/types';

export const chartVisualization: {
  [key in number]: { color: string; MoodSvg: ElementType<ISvgProps> };
} = {
  0: { color: '#12C28D', MoodSvg: MoodGreatSvg },
  1: { color: '#34BAE4', MoodSvg: MoodGoodSvg },
  2: { color: '#595959', MoodSvg: MoodMehSvg },
  3: { color: '#EF7650', MoodSvg: MoodBadSvg },
  4: { color: '#F00000', MoodSvg: MoodAwfulSvg },
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
  data,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const { rate, percentage } = data[index];
  const { MoodSvg } = chartVisualization[rate];

  return (
    <g transform={`translate(${x},${y})`} textAnchor="middle" dominantBaseline="end">
      {percentage > 10 ? (
        <>
          <foreignObject x="-12" y="-24" width="24" height="24">
            <MoodSvg color="white" width={24} height={24} />
          </foreignObject>
          <text x={-2} y={16} fill="white" style={{ marginTop: 100 }} fontSize="12" offset={12}>
            %{Math.round(percentage)}
          </text>
        </>
      ) : null}
    </g>
  );
};

interface PropsType {
  data: KhiStatisticsItem[];
}

const MoodPieChart: React.FC<PropsType> = ({ data }) => {
  if (!data.length) {
    return <p className="text-[14px] mt-2">No data available.</p>;
  }

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx="50data"
        cy="50%"
        labelLine={false}
        label={(label) => renderCustomizedLabel({ ...label, data })}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        offset={80}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={chartVisualization[index].color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default MoodPieChart;
