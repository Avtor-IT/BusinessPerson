import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, RouteConfig } from 'shared/config/routeConfig';
import { MainPage } from 'pages/MainPage';
import { ServicesPage } from 'pages/ServicesPage';
import { AppealsPage } from 'pages/AppealsPage';
import { TutorialPage } from 'pages/TutorialPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoginPage } from 'pages/LoginPage';
import PrivateRoute from './PrivateRoute';

const Aliases = {
    [AppRoutes.MAIN]: <MainPage />,
    [AppRoutes.SERVICES]: <ServicesPage />,
    [AppRoutes.APPEALS]: <AppealsPage />,
    [AppRoutes.TUTORIAL]: <TutorialPage />,
    [AppRoutes.NOT_FOUND]: <NotFoundPage />,
    [AppRoutes.LOGIN]: <LoginPage />,
};

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка</div>}>
            <Routes>
                <Route element={<PrivateRoute />}>
                    {Object.entries(RouteConfig).map(([route, { path }]) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={Aliases[route]}
                            />
                        );
                    })}
                </Route>

                <Route
                    path="login"
                    element={Aliases[AppRoutes.LOGIN]}
                />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
