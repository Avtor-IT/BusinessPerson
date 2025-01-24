import { useMediaQuery, useTheme } from '@mui/system';

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

function useBreakpoint() {
	const theme = useTheme();
	const keys = [...theme.breakpoints.keys].reverse();

	return (
		keys.reduce((output, key) => {
			const matches = useMediaQuery(theme.breakpoints.up(key));
			return !output && matches ? key : output;
		}, null) || 'xs'
	);
}

export default useBreakpoint;
