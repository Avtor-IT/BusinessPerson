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
					{
						props: { variant: 'card' },
						style: ({ theme, ownerState }) => ({
							padding: '16px',
							background: 'transparent',
							boxShadow:
								'0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d',
							'&:hover': {
								boxShadow:
									'0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d',
							},
							color: theme.palette[ownerState.color].main,
						}),
					},
					{
						props: { variant: 'contained' },
						style: ({ theme, ownerState }) => ({
							color: theme.palette[ownerState.color].contrastText,
						}),
					},
				],
				padding: '10px 16px',
				textTransform: 'none',
				borderRadius: 16,
				transition: 'background .2s ease',
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				borderRadius: 16,
				boxShadow:
					'0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d',
			},
		},
	},
	MuiCardContent: {
		styleOverrides: {
			root: {
				// padding: '0 24px',
			},
		},
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: { variant: 'M24' },
		},
		styleOverrides: {
			root: {
				padding: '32px 24px 24px',
			},
			action: {
				margin: 0,
			},
		},
	},
	MuiCardActions: {
		styleOverrides: {
			root: {
				padding: '24px 24px 16px 24px',
			},
		},
	},
};

export default components;
