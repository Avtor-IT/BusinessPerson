import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ children }) => {
    return (
        <Typography
            variant={'h3'}
            sx={{ mb: '54px' }}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
