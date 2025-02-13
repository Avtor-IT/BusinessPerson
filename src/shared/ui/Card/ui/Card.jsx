import { Box } from '@mui/system';

/**
 * @typedef {'default' | 'no-shadow'} variant
 */

/**
 * @param {{variant: variant, className?: string, style?: React.CSSProperties, children: React.ReactNode}} props
 * @returns {ReactNode}
 */
export const Card = ({ children, sx, variant = 'default', ...props }) => {
	const defaultSx = {
		backgroundColor: 'var(--bg-additional-color)',
		borderRadius: '16px',
		boxShadow: '0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d',
		position: 'relative',
		overflow: 'hidden',
		padding: '32px 24px 24px',
	};
	const variantSx = {
		'no-shadow': {
			boxShadow: 'none',
			border: '0.5px solid var(--gray-light)',
		},
		default: {},
	};

	return (
		<Box
			{...props}
			sx={{ ...defaultSx, ...variantSx[variant], ...sx }}
		>
			{children}
		</Box>
	);
};
