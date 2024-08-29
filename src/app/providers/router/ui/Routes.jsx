import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import PrivateRoute from 'app/providers/router/ui/PrivateRoute';
import { ServicesPage } from 'pages/ServicesPage';
import { TutorialPage } from 'pages/TutorialPage';
import { LoginPage } from 'pages/LoginPage';
import { AppealPage } from 'pages/AppealPage';
import { AppealsPage } from 'pages/AppealsPage';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import B24WidgetProvider from 'app/providers/b24WidgetProvider';

const Routes = () => {
	const router = createBrowserRouter([
		{
			id: 'root',
			path: '/',
			element: <PrivateRoute />,
			children: [
				{
					index: true,
					element: (
						<B24WidgetProvider>
							<MainPage />
						</B24WidgetProvider>
					),
				},
				{
					path: RoutePath[AppRoutes.SERVICES],
					element: (
						<B24WidgetProvider>
							<ServicesPage />
						</B24WidgetProvider>
					),
				},
				{
					path: RoutePath[AppRoutes.TUTORIAL],
					element: (
						<B24WidgetProvider>
							<TutorialPage />
						</B24WidgetProvider>
					),
				},
				{
					path: RoutePath[AppRoutes.APPEALS],
					element: (
						<B24WidgetProvider>
							<AppealsPage />
						</B24WidgetProvider>
					),
				},
				{
					path: RoutePath[AppRoutes.APPEAL],
					element: (
						<B24WidgetProvider>
							<AppealPage />
						</B24WidgetProvider>
					),
				},
				{
					path: RoutePath[AppRoutes.NOT_FOUND],
					element: (
						<B24WidgetProvider>
							<NotFoundPage />
						</B24WidgetProvider>
					),
				},
			],
		},
		{
			path: 'login',
			element: (
				<Suspense fallback={<div>loading</div>}>
					<LoginPage />
				</Suspense>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
