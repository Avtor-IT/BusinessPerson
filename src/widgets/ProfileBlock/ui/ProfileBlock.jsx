import React from 'react';
import { useCurrentUserQuery } from 'entities/User';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { NotificationButton } from 'entities/Notifications';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

const ProfileBlock = () => {
	const userQuery = useCurrentUserQuery();
	const navigate = useNavigate();

	const queryClient = useQueryClient();

	const logout = () => {
		queryClient.invalidateQueries({ queryKey: ['status'] });
		sessionStorage.removeItem('access');
		sessionStorage.removeItem('refresh');

		navigate('/login');
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
