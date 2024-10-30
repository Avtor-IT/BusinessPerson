export const AppRoutes = {
	MAIN: 'main',
	SERVICES: 'services',
	// APPEALS: 'appeals',
	// APPEAL: 'appeal',
	TUTORIAL: 'tutorial',
	LOGIN: 'login',
	NOT_FOUND: 'notFound',
};

export const RoutePath = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SERVICES]: '/services',
	// [AppRoutes.APPEALS]: '/appeals',
	// [AppRoutes.APPEAL]: '/appeals/:chatId',
	[AppRoutes.TUTORIAL]: '/tutorial',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
	},
	[AppRoutes.SERVICES]: {
		path: RoutePath[AppRoutes.SERVICES],
	},
	/*[AppRoutes.APPEALS]: {
		path: RoutePath[AppRoutes.APPEALS],
	},
	[AppRoutes.APPEAL]: {
		path: RoutePath[AppRoutes.APPEAL],
	},*/
	[AppRoutes.TUTORIAL]: {
		path: RoutePath[AppRoutes.TUTORIAL],
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
	},
};
