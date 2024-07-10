import React from 'react';
import {createTheme, ThemeProvider as MaterialTheme} from '@mui/material';

export const ThemeProvider = ({children}) => {
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
    });

    return (
        <MaterialTheme
            theme={theme}
        >
            {children}
        </MaterialTheme>
    );
};