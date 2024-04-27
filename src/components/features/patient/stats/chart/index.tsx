import { PieChart } from '@components/ui/charts';

import { chartData } from '@components/ui/charts/pie-chart/lib/index.constants';

import { classes } from './index.tailwind';

const Chart = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Mood Count</h2>
      <PieChart data={chartData} />
    </div>
  );
};

export default Chart;