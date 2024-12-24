import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import PrivateRoute from 'app/providers/router/ui/PrivateRoute';
import { TutorialPage } from 'pages/TutorialPage';
import { LoginPage } from 'pages/LoginPage';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import B24WidgetProvider from 'app/providers/b24WidgetProvider';
import { MarketPage } from 'pages/MarketPage';
import { CompanyPage } from 'pages/CompanyPage';
import { LetterPage } from 'pages/LetterPage';
import CompanyDocumentsPage from 'pages/CompanyDocumentsPage/ui/CompanyDocumentsPage';
import { FallbackPage } from 'pages/FallbackPage';

const Routes = () => {
	const router = createBrowserRouter([
		{
			id: 'root',
			path: '/',
			element: (
				<B24WidgetProvider>
					<PrivateRoute />
				</B24WidgetProvider>
			),
			children: [
				{
					index: true,
					element: <MainPage />,
				},
				{
					path: RoutePath[AppRoutes.COMPANY],
					element: <CompanyPage />,
				},
				{
					path: `${
						RoutePath[AppRoutes.COMPANY]
					}/:companyTitle/documents`,
					element: <CompanyDocumentsPage />,
				},
				{
					path: RoutePath[AppRoutes.MARKET],
					element: <MarketPage />,
				},
				{
					path: RoutePath[AppRoutes.LETTER],
					element: <LetterPage />,
				},
				{
					path: RoutePath[AppRoutes.TUTORIAL],
					element: <TutorialPage />,
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
				<Suspense fallback={<FallbackPage />}>
					<LoginPage />
				</Suspense>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
