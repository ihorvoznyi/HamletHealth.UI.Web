import { IChartData } from './index.interfaces';
import { MoodEmptySvg, MoodGreatSvg, MoodAwfulSvg, MoodBadSvg, MoodGoodSvg } from '@components/ui/svg';

export const chartData: IChartData[] = [
  { color: '#595959', percentage: 32, MoodSvg: MoodEmptySvg },  
  { color: '#34BAE4', percentage: 27, MoodSvg: MoodGoodSvg },
  { color: '#EF7650', percentage: 18, MoodSvg: MoodBadSvg },
  { color: '#F00000', percentage: 13, MoodSvg: MoodAwfulSvg },
  { color: '#12C28D', percentage: 10, MoodSvg: MoodGreatSvg },
];