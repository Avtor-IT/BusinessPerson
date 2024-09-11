import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'app/layout/Layout';
import { useCheckStatus } from 'entities/User';
import { useQueryClient } from '@tanstack/react-query';

const PrivateRoute = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const queryClient = useQueryClient();
	const location = useLocation();
	const navigate = useNavigate();

	const statusQuery = useCheckStatus();

	useEffect(() => {
		if (statusQuery.data) {
			const isAuthenticated =
				statusQuery.data.is_authenticated &&
				sessionStorage.getItem('access');
			setAuth(isAuthenticated);
			if (!isAuthenticated) {
				navigate('/login', { replace: true });
			}
		}
		if (statusQuery.error) {
			setAuth(false);
			navigate('/login', { replace: true });
		}
	}, [navigate, statusQuery]);

	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: ['status'] });
	}, [queryClient, location.pathname]);

	if (statusQuery.isPending) return <div>Загрузка...</div>;

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
