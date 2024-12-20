export const AppRoutes = {
	MAIN: 'main',
	COMPANY: 'company',
	MARKET: 'market',
	LETTER: 'letter',
	TUTORIAL: 'tutorial',
	LOGIN: 'login',
	NOT_FOUND: 'notFound',
};

export const RoutePath = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.COMPANY]: '/company',
	[AppRoutes.MARKET]: '/market',
	[AppRoutes.LETTER]: '/letter',
	[AppRoutes.TUTORIAL]: '/tutorial',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.NOT_FOUND]: '*',
};
