import { useTheme } from '@mui/system';
import useBreakpoint from './useBreakpoint';

const useWidth = () => {
	const breakpoint = useBreakpoint();
	const theme = useTheme();

	return theme.breakpoints.values[breakpoint];
};

export default useWidth;
