import React from 'react';
import { MyCompanyAccounts } from '../../../widgets/MyCompanyAccounts/index';
import { MyManager } from 'widgets/MyManager';
import { Box } from '@mui/material';
import { MyDocuments } from 'widgets/MyDocuments';

const MainPage = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'16px'}
        >
            <Box
                display={'flex'}
                gap={'16px'}
            >
                <MyCompanyAccounts />
                <MyManager />
            </Box>
            <Box
                display={'flex'}
                gap={'16px'}
            >
                <MyDocuments />
            </Box>
        </Box>
    );
};

export default MainPage;
