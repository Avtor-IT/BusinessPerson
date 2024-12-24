import { ThemeProvider as MaterialTheme } from '@mui/material';
import { theme } from '../model/theme';

export const ThemeProvider = ({ children }) => {
	return <MaterialTheme theme={theme}>{children}</MaterialTheme>;
};
