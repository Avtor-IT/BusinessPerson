import React from 'react';
import { useCurrentUserQuery } from 'entities/User';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { NotificationButton } from 'entities/Notifications';
import { Box } from '@mui/material';

const ProfileBlock = () => {
    const userQuery = useCurrentUserQuery();
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');

        navigate('/login');
        console.log('aa');
    };

    if (userQuery.isLoading) return <div>Загрузка пользователя...</div>;

    return (
        <Box
            display="flex"
            alignItems="center"
            gap="16px"
        >
            <NotificationButton />
            {userQuery.data.username}
            <Button onClick={logout}>Выйти</Button>
        </Box>
    );
};

export default ProfileBlock;
