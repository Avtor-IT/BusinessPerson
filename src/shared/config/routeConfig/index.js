export const AppRoutes = {
	MAIN: 'main',
	SERVICES: 'services',
	APPEALS: 'appeals',
	TUTORIAL: 'tutorial',
	LOGIN: 'login',
	NOT_FOUND: 'notFound',
};

export const RoutePath = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SERVICES]: '/services',
	[AppRoutes.APPEALS]: '/appeals',
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
	[AppRoutes.APPEALS]: {
		path: RoutePath[AppRoutes.APPEALS],
	},
	[AppRoutes.TUTORIAL]: {
		path: RoutePath[AppRoutes.TUTORIAL],
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
	},
};
