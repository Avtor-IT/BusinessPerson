const components = {
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
	MuiButton: {
		defaultProps: {
			disableElevation: true,
			disableRipple: true,
			disableTouchRipple: true,
			disableFocusRipple: true,
		},
		styleOverrides: {
			root: {
				variants: [
					{
						props: { variant: 'unstyled' },
						style: {
							padding: 0,
							background: 'transparent',
						},
					},
				],
				padding: '10px 16px',
				textTransform: 'none',
				borderRadius: 8,
				transition: 'background .2s ease',
			},
			outlined: {},
		},
	},
};

export default components;
