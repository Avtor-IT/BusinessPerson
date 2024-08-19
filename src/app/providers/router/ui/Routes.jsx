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

const Routes = () => {
	const router = createBrowserRouter([
		{
			id: 'root',
			path: '/',
			element: <PrivateRoute />,
			children: [
				{
					index: true,
					element: <MainPage />,
				},
				{
					path: RoutePath[AppRoutes.SERVICES],
					element: <ServicesPage />,
				},
				{
					path: RoutePath[AppRoutes.TUTORIAL],
					element: <TutorialPage />,
				},
				{
					path: RoutePath[AppRoutes.APPEALS],
					element: <AppealsPage />,
				},
				{
					path: RoutePath[AppRoutes.APPEAL],
					element: <AppealPage />,
				},
				{
					path: RoutePath[AppRoutes.NOT_FOUND],
					element: <NotFoundPage />,
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
