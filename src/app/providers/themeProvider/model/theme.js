import { createTheme } from '@mui/material';

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: 'Rubik, sans-serif',
		M40: {
			fontSize: 40,
			fontWeight: 500,
		},
		M32: {
			fontSize: 32,
			fontWeight: 500,
		},
		M24: {
			fontSize: 24,
			fontWeight: 500,
		},
		M20: {
			fontSize: 20,
			fontWeight: 500,
		},
		M16: {
			fontSize: 16,
			fontWeight: 500,
		},
		R48: {
			fontSize: 48,
			fontWeight: 400,
		},
		R20: {
			fontSize: 20,
			fontWeight: 400,
		},
		R16: {
			fontSize: 16,
			fontWeight: 400,
		},
		R12: {
			fontSize: 12,
			fontWeight: 400,
		},
		L24: {
			fontSize: 24,
			fontWeight: 300,
		},
		L20: {
			fontSize: 20,
			fontWeight: 300,
		},
		L16: {
			fontSize: 16,
			fontWeight: 300,
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					M40: 'h2',
					M24: 'h5',
					M20: 'span',
					R48: 'span',
					R20: 'span',
					R16: 'span',
					R12: 'span',
					L24: 'span',
					L20: 'span',
					L16: 'span',
				},
			},
		},
		MuiSkeleton: {
			styleOverrides: {
				rounded: {
					borderRadius: '16px',
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltipPlacementTop: {
					fontSize: '1rem',
					background: 'var(--tertiary)',
				},
			},
		},
	},
});
