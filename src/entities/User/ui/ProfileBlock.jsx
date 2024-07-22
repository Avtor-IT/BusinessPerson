import React from 'react';
import { useCurrentUserQuery } from 'entities/User';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';

export const ProfileBlock = () => {
    const userQuery = useCurrentUserQuery();

    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');

        navigate('/login');
    };

    if (userQuery.isLoading) return <div>Загрузка пользователя...</div>;

    return (
        <div>
            {userQuery.data.username} - <Button onClick={logout}>Выйти</Button>
        </div>
    );
};
