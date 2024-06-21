import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, RouteConfig } from 'shared/config/routeConfig';
import { MainPage } from 'pages/MainPage';
import { ServicesPage } from 'pages/ServicesPage';
import { AppealsPage } from 'pages/AppealsPage';
import { TutorialPage } from 'pages/TutorialPage';
import { NotFoundPage } from 'pages/NotFoundPage';

const Aliases = {
    [AppRoutes.MAIN]: <MainPage />,
    [AppRoutes.SERVICES]: <ServicesPage />,
    [AppRoutes.APPEALS]: <AppealsPage />,
    [AppRoutes.TUTORIAL]: <TutorialPage />,
    [AppRoutes.NOT_FOUND]: <NotFoundPage />,
};

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.entries(RouteConfig).map(([route, { path }]) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={Aliases[route]}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
