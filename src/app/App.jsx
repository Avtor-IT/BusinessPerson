import React, { StrictMode } from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { SideMenu } from '../widgets/SideMenu/ui/SideMenu';
import { Header } from '../widgets/Header/ui/Header';
import { Navigation } from '../widgets/Navigation/ui/Navigation';
import { StoreProvider } from './providers/storeProvider';
import 'app/styles/index.scss';
import { LogoLink } from '../widgets/LogoLink/ui/LogoLink';
import { Providers } from './providers/Providers';
import { Layout } from './layout/Layout';

const App = () => {
    return (
        <Providers>
            <Layout />
        </Providers>
    );
};

export default App;
