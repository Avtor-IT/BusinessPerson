import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import AvatarManager from 'features/AvatarManager';
import BlueEllipse from 'shared/assets/BlueEllipse/ui/BlueEllipse';
import MessageIcon from 'shared/assets/MessageIcon/ui/MessageIcon';
import CopyIcon from 'shared/assets/CopyIcon/ui/CopyIcon';
import cls from './MyManager.module.scss';

export const MyManager = ({ ...props }) => {
    return (
        <Card
            className={`${cls.MyManager}`}
            {...props}
        >
            <BlueEllipse top={-197} right={-102} />
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography variant="M24">Мой менеджер</Typography>
                <Button
                    variant={'unStyled'}
                    className={`${cls.btnMessage}`}
                >
                    <Typography variant="L16"> Написать </Typography>
                    <MessageIcon />
                </Button>
            </Box>
            <Box className={`${cls.infoManager}`}>
                <Box className={`${cls.avatarFIO}`}>
                    <AvatarManager />
                    <Typography variant='R20' style={{ lineHeight: '1.3' }}>
                        Менеджерова
                        <br />
                        Менедж
                        <br />
                        Менеджеровна
                    </Typography>
                </Box>
                <Box className={`${cls.phoneManager}`}>
                    <Typography variant='L24'>
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
