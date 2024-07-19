import React from 'react';
import { StoreProvider } from './storeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './themeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Providers = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <React.StrictMode>
            <BrowserRouter>
                <StoreProvider>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider>{children}</ThemeProvider>
                    </QueryClientProvider>
                </StoreProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
