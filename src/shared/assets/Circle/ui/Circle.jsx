import { Box } from '@mui/material';
import cls from './circle.module.scss';

const Circle = ({
	top,
	right,
	left,
	bottom,
	bg,
	width,
	height,
	transition,
	variant = 'blue',
	...otherProps
}) => {
	const classNames = [
		cls.Circle,
		variant === 'blue' ? cls.blue : cls.purple,
	].join(' ');
	return (
		<Box
			width={width || '678px'}
			height={height || '678px'}
			className={`${cls.Circle || ''} ${classNames}`}
			style={{
				top: top,
				right: right,
				left: left,
				bottom: bottom,
				backgroundColor: bg,
				transition: transition || 'all .6s var(--quick-animation)',
			}}
			{...otherProps}
		></Box>
	);
};

export default Circle;
