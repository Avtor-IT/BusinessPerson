import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../api/getCurrentUser';
import { checkStatus } from '../api/checkStatus';

export const useAuth = () => {
	const user = useSelector((state) => state.user.user);

	return {
		isAuth: !!user,
		user,
	};
};

export const useCurrentUserQuery = () => {
	return useQuery({
		queryFn: getCurrentUser,
		queryKey: ['users', 'current'],
		staleTime: 1000 * 5 * 60,
	});
};

export const useCheckStatus = () => {
	return useQuery({
		queryFn: checkStatus,
		queryKey: ['status'],
	});
};
