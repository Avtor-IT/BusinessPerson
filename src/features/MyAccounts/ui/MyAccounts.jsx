import React from 'react';
import { Button } from 'shared/ui/Button';
import { Box, Typography } from '@mui/material';
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
                    <Typography variant="h5"> Счета </Typography>
                    <Typography style={{ fontSize: '16px', fontWeight: '300' }}>
                        Дата следующего платежа
                    </Typography>
                </Box>
                <Typography
                    textAlign={'end'}
                    fontWeight={'400'}
                    fontSize={'16px'}
                >
                    20.12.2024
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                fontSize={'22px'}
            >
                <Button
                    variant={'unStyled'}
                    style={{ fontSize: '20px', fontWeight: '300' }}
                >
                    История
                </Button>
                <Button
                    variant={'unStyled'}
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: '300',
                    }}
                >
                    Оплатить
                    <AddSquareBtn style={{ width: '24px', height: '24px' }} />
                </Button>
            </Box>
        </>
    );
};
