import { useMediaQuery, useTheme } from '@mui/system';

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

const useMaxWidth = () => {
	const theme = useTheme();
	const keys = [...theme.breakpoints.keys];
	const breakpointsMap = new Map();

	keys.forEach((key) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const matches = useMediaQuery(theme.breakpoints.up(key));
		breakpointsMap.set(key, matches);
	});

	return Object.fromEntries(breakpointsMap);
};

export default useMaxWidth;
