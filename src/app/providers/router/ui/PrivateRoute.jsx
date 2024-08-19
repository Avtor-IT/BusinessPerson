import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Layout } from 'app/layout/Layout';
import { useCheckStatus } from 'entities/User';
import { useQueryClient } from '@tanstack/react-query';

const PrivateRoute = () => {
	const [auth, setAuth] = useState(null);
	const queryClient = useQueryClient();
	const location = useLocation();

	const statusQuery = useCheckStatus();

	useEffect(() => {
		if (statusQuery.data) {
			if (
				statusQuery.data.is_authenticated &&
				sessionStorage.getItem('access')
			) {
				setAuth(true);
				return;
			}
			setAuth(false);
		}
		if (statusQuery.error) {
			setAuth(false);
		}
		// setAuth(true);
	}, [statusQuery]);

	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: ['status'] });
	}, [location.pathname]);

	if (statusQuery.isPending) return <div>Загрузка...</div>;

	if (auth === null) {
		return null;
	}

	return auth ? (
		<Layout />
	) : (
		<Navigate
			to="/login"
			replace
		/>
	);
};

export default PrivateRoute;
