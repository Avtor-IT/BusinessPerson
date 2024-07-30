import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from 'shared/ui/Button';
import AddSquareBtn from 'features/AddSquareBtn/ui/AddSquareBtn';

export const MyAccounts = () => {
    return (
        <>
            <Box>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography variant="M24"> Счета </Typography>
                    <Typography variant="L16"> Дата следующего платежа </Typography>
                </Box>
                <Typography variant="R16" style={{ display: 'flex', justifyContent: 'end' }} >
                    20.12.2024
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                fontSize={'22px'}
            >
                <Button variant={'unStyled'}>
                    <Typography variant="L20">История</Typography>
                </Button>
                <Button
                    variant={'unStyled'}
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="L20">Оплатить</Typography>
                    <AddSquareBtn style={{ width: '24px', height: '24px' }} />
                </Button>
            </Box>
        </>
    );
};
