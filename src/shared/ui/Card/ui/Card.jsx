import cls from './Card.module.scss';
import { Box } from '@mui/system';

export const Card = ({
	children,
	className,
	variant,
	serviceColor,
	style,
	...props
}) => {
	const colorStyle = {
		'--service-color': serviceColor || 'var(--secondary)',
	};
	const resultStyles = Object.assign({}, style, colorStyle);

	return (
		<Box
			className={`${cls.Card} ${variant ? cls[variant] : ''} ${
				className || ''
			}`}
			style={resultStyles}
			{...props}
		>
			{children}
		</Box>
	);
};
