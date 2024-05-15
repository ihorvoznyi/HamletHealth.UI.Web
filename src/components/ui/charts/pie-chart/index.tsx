import { FC, useMemo } from 'react';

import { CalculatePositionParams, DescribeArcType, IChartData } from './lib';
import { classes } from './index.tailwind';

interface PropsType {
	data: IChartData[];
}

export const PieChart: FC<PropsType> = ({ data }) => {
	const sliceAngles = calculateSliceAngles(
		data.map((item, idx) => {
      let val: number = 0;

      if (idx % 5 === 0) {
        val = 99;
      }
      if (idx % 4 === 0) {
        val = 1;
      }

      return {
        ...item,
        percentage: val
      };
    })
	);

	return (
		<svg viewBox="0 0 100 100" style={classes.svg}>
			{sliceAngles.map(
				({ color, path, labelPosition, percentage, MoodSvg, iconPosition }, index) => (
					<g key={index}>
						<path fill={color} d={path} />
						<text x={labelPosition.x} y={labelPosition.y} style={classes.text} textAnchor="middle">
							%{percentage}
						</text>
						<MoodSvg x={iconPosition.x} y={iconPosition.y} color="white" width={7.3} height={7.3} />
					</g>
				)
			)}
		</svg>
	);
};

export const calculateSliceAngles = (chartData: IChartData[]) => {
	let startAngle = 0;
	const adjustedData = adjustData(chartData);

	return adjustedData.map(({ value: percentage, color, MoodSvg }) => {
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

const adjustData = (chartData: IChartData[]): IChartData[] => {
	const total = chartData.reduce((sum, { value: percentage }) => sum + percentage, 0);
	if (total === 0) {
		return chartData;
	}

	const adjustedData = chartData.map(item => ({
		...item,
		percentage: (item.value / total) * 100,
	}));

	const maxPercentageItem = adjustedData.reduce(
		(max, item) => (item.percentage > max.percentage ? item : max),
		adjustedData[0]
	);
	if (maxPercentageItem.percentage === 100) {
		adjustedData.forEach(item => {
			if (item !== maxPercentageItem) {
				item.percentage = 0;
			}
		});
	}

	return adjustedData;
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
