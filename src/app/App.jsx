import React from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { Providers } from './providers/Providers';
import 'app/styles/index.scss';
import 'app/styles/override.scss';


const App = () => {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    );
};

export default App;
