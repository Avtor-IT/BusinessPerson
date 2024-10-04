import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Layout } from 'app/layout/Layout';
import { useCheckStatus } from 'entities/User';
import { useQueryClient } from '@tanstack/react-query';
import { Box } from '@mui/system';

const PrivateRoute = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const queryClient = useQueryClient();
	const location = useLocation();

	const statusQuery = useCheckStatus();

	useEffect(() => {
		if (statusQuery.data) {
			const isAuthenticated = statusQuery.data.is_authenticated;
			setAuth(isAuthenticated);
		}

		if (statusQuery.error) {
			setAuth(false);
		}
	}, [statusQuery]);

	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: ['status'] });
	}, [location.pathname]);

	if (statusQuery.isPending) {
		return <Box data-testid="loader">Загрузка...</Box>;
	}

	if (auth === null) {
		return null;
	}

	if (!auth) {
		return (
			<Navigate
				to="/login"
				replace
			/>
		);
	}

	if (!children) {
		return <Layout />;
	}

	return { children };
};

export default PrivateRoute;
