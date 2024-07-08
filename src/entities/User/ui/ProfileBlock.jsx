import React from 'react';
import { useAuth } from 'entities/User';

export const ProfileBlock = () => {
    const { user } = useAuth();
    return (
        <div>
            {user?.name} {user?.last_name}
        </div>
    );
};