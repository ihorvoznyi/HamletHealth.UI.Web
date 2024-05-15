import { ElementType } from 'react';
import { ISvgProps, KeyHealthIndicatorRate } from '@shared/lib/types';
import type { Statistics } from '../model/types';
import {
	MoodGreatSvg,
	MoodGoodSvg,
	MoodMehSvg,
	MoodBadSvg,
	MoodAwfulSvg,
} from '@components/ui/svg';
import { GetTreatmentStatsForPeriodResponse } from '../../statistics/api/stats.api';

type ChartItem = {
	color: string;
	MoodSvg: ElementType<ISvgProps>;
};

export const khiVisualizationMap = {
	0: { color: '#595959', MoodSvg: MoodMehSvg },
	1: { color: '#34BAE4', MoodSvg: MoodGoodSvg },
	2: { color: '#EF7650', MoodSvg: MoodBadSvg },
	3: { color: '#F00000', MoodSvg: MoodAwfulSvg },
	4: { color: '#12C28D', MoodSvg: MoodGreatSvg },
};
