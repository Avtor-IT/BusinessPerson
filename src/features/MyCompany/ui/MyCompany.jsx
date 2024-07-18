import React from "react";
import ExportBtn from "features/ExportBtn/ui/ExportBtn";
import ImportBtn from "features/ImportBtn/ui/ImportBtn";
import ArrowIcon from "shared/assets/ArrowIcon/ui/ArrowIcon";
import CopyIcon from "shared/assets/CopyIcon/ui/CopyIcon";
import { Button } from "shared/ui/Button";
import { Box } from "@mui/material";

export const MyCompany = () => {

    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                width={'100%'}
            >
                <Box className={'title'}> Моя компания </Box>
                <Button variant={'unStyled'}
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    Подробнее
                    <ArrowIcon direction="right" />
                </Button>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'16px'}
            >
                <Box className="subtitle">ООО "Компания"</Box>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box
                        display={'flex'}
                        gap={'8px'}
                        alignItems={'center'}
                    >
                        ИНН: 1234567890
                        <Button variant={'unStyled'}>
                            <CopyIcon style={{ cursor: 'pointer' }} />
                        </Button>
                    </Box>
                    <Box
                        display={'flex'}
                        gap={'16px'}
                        alignItems={'center'}
                    >
                        <ExportBtn style={{ width: '24px', height: '24px' }} />
                        <ImportBtn style={{ width: '24px', height: '24px' }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}