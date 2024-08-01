import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Box, Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';
import AvatarManager from 'shared/ui/AvatarManager';
import BlueEllipse from 'shared/assets/BlueEllipse/ui/BlueEllipse';
import MessageIcon from 'shared/assets/MessageIcon/ui/MessageIcon';
import CopyBtn from 'features/CopyBtn';
import cls from './MyManager.module.scss';

export const MyManager = ({ ...props }) => {
    return (
        <Card
            className={`${cls.MyManager}`}
            {...props}
        >
            <BlueEllipse
                top={-197}
                right={-102}
            />
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography variant="M24">Мой менеджер</Typography>
                <Link
                    to={RoutePath[AppRoutes.MAIN]}
                    className={`${cls.btnMessage}`}
                >
                    <Typography variant="L16"> Написать </Typography>
                    <MessageIcon />
                </Link>
            </Box>
            <Box className={`${cls.infoManager}`}>
                <Box className={`${cls.avatarFIO}`}>
                    <AvatarManager />
                    <Typography
                        variant="R20"
                        style={{ lineHeight: '1.3' }}
                    >
                        Менеджерова
                        <br />
                        Менедж
                        <br />
                        Менеджеровна
                    </Typography>
                </Box>
                <CopyBtn className={`${cls.phoneManager}`}>
                    <Typography variant="L24">+7 (999) 999 99-99</Typography>
                </CopyBtn>
            </Box>
        </Card>
    );
};
