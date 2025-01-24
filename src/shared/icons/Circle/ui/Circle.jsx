import { Box } from '@mui/material';
import cls from './circle.module.scss';

const Circle = ({ width, height, size, variant = 'blue', ...otherProps }) => {
	const classNames = [
		cls.Circle,
		variant === 'blue' ? cls.blue : cls.purple,
	].join(' ');

	return (
		<Box
			width={width || size || '678px'}
			height={height || size || '678px'}
			className={classNames}
			{...otherProps}
		></Box>
	);
};

export default Circle;
