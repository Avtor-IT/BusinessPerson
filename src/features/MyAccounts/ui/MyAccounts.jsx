import React from "react";
import { Button } from "shared/ui/Button";
import { Box } from "@mui/material";
import AddSquareIcon from "shared/assets/AddSquare/ui/AddSquareIcon";

export const MyAccounts = () => {

    return (
        <>
            <Box>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box className={'title'}> Счета </Box>
                    <Box>Дата следующего платежа</Box>
                </Box>
                <Box
                    textAlign={'end'}
                    fontWeight={'400'}
                >
                    20.12.2024
                </Box>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                fontSize={'22px'}
            >
                <Button variant={'unStyled'}>История</Button>
                <Button variant={'unStyled'}
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                    }}
                >
                    Оплатить
                    <AddSquareIcon />
                </Button>
            </Box>
        </>
    )
}