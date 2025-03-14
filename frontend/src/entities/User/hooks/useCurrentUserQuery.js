import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../api/getCurrentUser';

const useCurrentUserQuery = () => {
	return useQuery({
		queryFn: getCurrentUser,
		queryKey: ['users', 'current'],
		staleTime: 1000 * 5 * 60,
	});
};

export default useCurrentUserQuery;
