import React from 'react';
import { StoreProvider } from './storeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './themeProvider';

export const Providers = ({ children }) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <StoreProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                </StoreProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
