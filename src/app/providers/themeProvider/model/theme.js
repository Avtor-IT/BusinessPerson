import { createTheme } from '@mui/material';
import components from './components';
import palette from './palette';
import typography from './typography';

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
	typography,
	components,
	palette,
});
