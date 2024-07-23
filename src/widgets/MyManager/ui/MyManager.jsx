import { Box, Typography } from '@mui/material';
import React from 'react';
import BlueEllipse from 'shared/assets/BlueEllipse/ui/BlueEllipse';
import MessageIcon from 'shared/assets/MessageIcon/ui/MessageIcon';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import cls from './MyManager.module.scss';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import AvatarManager from 'features/AvatarManager';

export const MyManager = ({ className, ...props }) => {
    return (
        <Card
            className={`${cls.MyManager} ${className}`}
            {...props}
        >
            <BlueEllipse top={-197} right={-102} />
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography variant="h5">Мой менеджер</Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnMessage}`}
                >
                    <Typography style={{ fontSize: '16px', fontWeight: '300' }}>
                        Написать
                    </Typography>
                    <MessageIcon />
                </Button>
            </Box>
            <Box className={`${cls.infoManager}`}>
                <Box className={`${cls.avatarFIO}`}>
                    <AvatarManager />
                    <Typography
                        style={{
                            fontSize: '20px',
                            fontWeight: '400',
                            lineHeight: '1.3',
                        }}
                    >
                        Менеджерова
                        <br />
                        Менедж
                        <br />
                        Менеджеровна
                    </Typography>
                </Box>
                <Box className={`${cls.phoneManager}`}>
                    <Typography style={{ fontSize: '24px', fontWeight: '300' }}>
                        +7 (999) 999 99-99
                    </Typography>
                    <Button variant={'unStyled'}>
                        <CopyIcon />
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};
