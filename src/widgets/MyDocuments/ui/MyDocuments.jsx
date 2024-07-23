import { Box, Typography } from '@mui/material';
import AddSquareBtn from 'features/AddSquareBtn';
import React from 'react';
import BlueEllipse from 'shared/assets/BlueEllipse/ui/BlueEllipse';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import cls from './MyDocuments.module.scss';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import { display } from '@mui/system';

export const MyDocuments = ({ ...props }) => {
    const testArrayDocuments = [
        'СНИЛС',
        'Устав',
        'ОГРН',
        'Паспорт'
    ]

    return (
        <Card
            {...props}
            className={`${cls.MyDocuments}`}
        >
            <BlueEllipse
                width={678} height={678}
                bottom={-197} right={293}
            />
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                zIndex={'2'}
            >
                <Typography variant='h5'>
                    Мои документы
                </Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnAddMyDocument}`}
                >
                    Добавить
                    <AddSquareBtn
                        style={{ width: '24px', height: '24px' }}
                    />
                </Button>
            </Box>
            <Box
                marginTop={'32px'}
                zIndex={'2'}
            >
                <Typography
                    style={{ fontSize: '20px', fontWeight: '400' }}
                >
                    Все необходимые документы <br /> всегда под рукой
                </Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnExpand}`}
                >
                    Развернуть
                    <ArrowIcon variant="down" />
                </Button>
            </Box>
            <Box className={`${cls.arrayMyDocumnets}`}>
                {
                    testArrayDocuments.map((document, index) => (
                        <Card
                            key={index}
                            style={{
                                position: 'absolute',
                                height: '291px',
                                width: '246px',
                                right: `${index * 50}px`,
                                top: `${index * 56}px`,
                                padding: '16px 32px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            {document}
                            <CopyIcon stroke="#3D3F4C" />
                        </Card>
                    ))
                }
            </Box>
        </Card>
    );
};
