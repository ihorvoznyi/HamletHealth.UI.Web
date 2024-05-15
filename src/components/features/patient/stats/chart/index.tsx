import React from 'react';

import { PieChart } from '@components/ui/charts';

import type { IChartData } from '@components/ui/charts/pie-chart/lib';

import { classes } from './index.tailwind';

interface PropsType {
  data: IChartData[]
}

const Chart: React.FC<PropsType> = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Mood Count</h2>
      <PieChart data={data} />
    </div>
  );
};

export default Chart;