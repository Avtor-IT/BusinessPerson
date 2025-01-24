import { Box } from '@mui/system';
import cls from './Card.module.scss';

/**
 * @typedef {'default' | 'no-shadow'} variant
 */

/**
 * @param {{variant: variant, className?: string, style?: React.CSSProperties, children: React.ReactNode}} props
 * @returns {ReactNode}
 */
export const Card = ({
	children,
	className = '',
	variant = 'default',
	style = {},
	...props
}) => {
	const resultStyles = Object.assign({}, style);

	return (
		<Box
			className={`${cls.Card} ${cls[variant]} ${className}`}
			style={resultStyles}
			{...props}
		>
			{children}
		</Box>
	);
};
