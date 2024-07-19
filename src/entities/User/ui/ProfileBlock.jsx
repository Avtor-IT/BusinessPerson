import React from 'react';
import { useCurrentUserQuery } from 'entities/User';

export const ProfileBlock = () => {
    const userQuery = useCurrentUserQuery();

    if (userQuery.isLoading) return <div>Загрузка пользователя...</div>;

    return <div>{userQuery.data.username}</div>;
};
