import React from 'react';
import { MyCompanyAccounts } from '../../../widgets/MyCompanyAccounts/index';
import { MyManager } from 'widgets/MyManager';
import { Box } from '@mui/material';

const MainPage = () => {
    return (
        <Box
            display={'flex'}
            gap={'16px'}
        >
            <MyCompanyAccounts />
            <MyManager />
        </Box>
    );
};

export default MainPage;
