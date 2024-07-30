import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import BlueEllipse from 'shared/assets/BlueEllipse/ui/BlueEllipse';
import AddSquareBtn from 'features/AddSquareBtn';
import ArrowIcon from 'shared/assets/ArrowIcon/ui/ArrowIcon';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import cls from './MyDocuments.module.scss';

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
                <Typography variant='M24'>
                    Мои документы
                </Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnAddMyDocument}`}
                >
                    <Typography variant='L16'>Добавить</Typography>
                    <AddSquareBtn
                        style={{ width: '24px', height: '24px' }}
                    />
                </Button>
            </Box>
            <Box
                marginTop={'32px'}
                zIndex={'2'}
            >
                <Typography variant='R20'>
                    Все необходимые документы <br /> всегда под рукой
                </Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnExpand}`}
                >
                    <Typography variant='L16'>Развернуть</Typography>
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
                            <Typography variant='L20'>{document}</Typography>
                            <CopyIcon stroke="#3D3F4C" />
                        </Card>
                    ))
                }
            </Box>
        </Card>
    );
};
