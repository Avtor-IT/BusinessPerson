import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Box, Typography } from '@mui/material';
import cls from './MultipleGauge.module.scss';

const MultipleGauge = ({ width, height, values, valueText, colors }) => {
	values.sort((a, b) => b - a);
	width += 40;

	const defaultColors = colors || [
		'#F25B10',
		'#2E2C83',
		'#D58528',
		'#34996D',
	];

	return (
		<Box
			className={cls.MultipleGauge}
			height={height}
			width={width}
		>
			{values.map((value, i) => (
				<Gauge
					className={cls.GaugeItem}
					key={i}
					sx={{
						[`& .${gaugeClasses.valueText}`]: {
							display: 'none',
						},
						[`& .${gaugeClasses.referenceArc}`]: {
							display: 'none',
						},
						[`& .${gaugeClasses.valueArc}`]: {
							fill: defaultColors[i] || 'red',
						},
					}}
					cornerRadius="50%"
					innerRadius="85%"
					width={width}
					height={height}
					value={value === values[i - 1] ? value - 1 : value}
					startAngle={-90}
					endAngle={90}
				/>
			))}
			<Typography
				variant="M40"
				component="span"
				className={cls.ValueText}
			>
				{new Intl.NumberFormat('ru-RU').format(valueText)}
			</Typography>
		</Box>
	);
};
export default MultipleGauge;
