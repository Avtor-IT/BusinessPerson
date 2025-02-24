import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import useCurrentUserQuery from '../hooks/useCurrentUserQuery';

const User = () => {
	const { data, isLoading } = useCurrentUserQuery();
	const navigate = useNavigate();

	const queryClient = useQueryClient();

	const logout = () => {
		queryClient.clear();
		sessionStorage.removeItem('access');
		sessionStorage.removeItem('refresh');

		navigate('/login', { replace: true });
	};

	if (isLoading) return <Box>Загрузка пользователя...</Box>;

	return (
		<>
			{data.username}
			<Button onClick={logout}>Выйти</Button>
		</>
	);
};

export default User;
