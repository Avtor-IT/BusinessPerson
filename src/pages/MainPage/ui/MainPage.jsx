import React from 'react';
import { Box, Grid } from '@mui/material';
import { MyCompanyAccounts } from 'widgets/MyCompanyAccounts';
import { MyManager } from 'widgets/MyManager';
import { MyDocuments } from 'widgets/MyDocuments';
import { MyRecomends } from 'widgets/MyRecomends';

const MainPage = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'16px'}
        >
            <Grid
                container
                columns={5}
                spacing={'19px'}
            >
                <Grid
                    item
                    xs={3}
                >
                    <MyCompanyAccounts />
                </Grid>
                <Grid
                    item
                    xs={2}
                >
                    <MyManager />
                </Grid>
            </Grid>
            <Grid
                container
                columns={5}
                spacing={2}
            >
                <Grid
                    item
                    xs={2}
                >
                    <MyDocuments />
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    <MyRecomends />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainPage;
