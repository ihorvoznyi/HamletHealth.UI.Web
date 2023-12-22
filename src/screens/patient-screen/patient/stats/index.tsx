import { PieChart } from '@components/charts';
import { chartData } from '@components/charts/pie-chart/lib/index.constants';

const Stats = () => {
  return (
    <div className="mt-[34px] bg-white mx-[80px] px-[38px] py-[16px]">
      <div className="mt-[38px] pl-[60px]">
        <h2 className="fs22SemiBold mb-[24px]">Mood Count</h2>
        <PieChart data={chartData} />
      </div>
    </div>
  );
};

export default Stats;