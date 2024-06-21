import React from 'react';
import { StoreProvider } from './storeProvider';
import { BrowserRouter } from 'react-router-dom';

export const Providers = ({ children }) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <StoreProvider>{children}</StoreProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
