import { ElementType, FC } from 'react';

import {
	MoodAwfulSvg,
	MoodBadSvg,
	MoodGoodSvg,
	MoodGreatSvg,
	MoodMehSvg,
} from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import type { KeyHealthIndicatorRate } from '@shared/lib/types';
import { HealthIndicatorRate } from '@app/store/entities/patient/model/types';

type PropsType = Omit<HealthIndicatorRate, 'id'>

type KeyHealthIndicatorMap = {
	[key in KeyHealthIndicatorRate]: {
		indicator: string;
		color: string;
		Icon: ElementType;
	};
};

export const healthIndicatorMap: KeyHealthIndicatorMap = {
	0: {
		indicator: 'Great',
		color: '#12C28D',
		Icon: MoodGreatSvg,
	},
	1: {
		indicator: 'Good',
		color: '#34BAE4',
		Icon: MoodGoodSvg,
	},
	2: {
		indicator: 'Normal',
		color: '#595959',
		Icon: MoodMehSvg,
	},
	3: {
		indicator: 'Bad',
		color: '#EF7650',
		Icon: MoodBadSvg,
	},
	4: {
		indicator: 'Awful',
		color: '#F00000',
		Icon: MoodAwfulSvg,
	},
};

const renderKeyHealthIndicator: FC<PropsType> = ({ rate, keyHealthIndicator }) => {
	const { color, indicator, Icon } = healthIndicatorMap[rate];

	return (
		<div className={cn(classes.container)} style={{ color }}>
			<Icon width={32} height={32} color={color} />
			<p className={classes.p}>{indicator}</p>
			<span className={classes.span}>({keyHealthIndicator.name})</span>
		</div>
	);
};

export default renderKeyHealthIndicator;
