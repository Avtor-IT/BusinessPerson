export const AppRoutes = {
	MAIN: 'main',
	COMPANY: 'company',
	COMPANY_DOCUMENTS: 'companyDocuments',
	MARKET: 'market',
	LETTER: 'letter',
	TUTORIAL: 'tutorial',
	LOGIN: 'login',
	NOT_FOUND: 'notFound',
};

export const RoutePath = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.COMPANY]: '/company',
	[AppRoutes.COMPANY_DOCUMENTS]: '/company/:companyTitle/documents/*',
	[AppRoutes.MARKET]: '/market',
	[AppRoutes.LETTER]: '/letter',
	[AppRoutes.TUTORIAL]: '/tutorial',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.NOT_FOUND]: '*',
};

export const createRoute = (routeKey, params = {}) => {
	const basePath = RoutePath[routeKey];
	if (!basePath) {
		throw new Error(`Route with key "${routeKey}" not found in RoutePath.`);
	}

	let finalPath = basePath;
	for (const [key, value] of Object.entries(params)) {
		const paramPlaceholder = `:${key}`;
		if (finalPath.includes(paramPlaceholder)) {
			finalPath = finalPath.replace(paramPlaceholder, value);
		}
	}

	return finalPath;
};
