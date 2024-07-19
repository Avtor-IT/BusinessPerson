import React from 'react';
import { createTheme, ThemeProvider as MaterialTheme } from '@mui/material';
import { fontWeight } from '@mui/system';

export const ThemeProvider = ({ children }) => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1920,
            },
        },
        typography: {
            fontFamily: 'Rubik, sans-serif',
            h5: {
                fontSize: 24,
                fontWeight: 500,
            },
        },
    });

    return (
        <MaterialTheme
            theme={theme}
        >
            {children}
        </MaterialTheme>
    );
};