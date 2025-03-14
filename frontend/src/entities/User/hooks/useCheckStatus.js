import { useQuery } from '@tanstack/react-query';
import { checkStatus } from '../api/checkStatus';

const useCheckStatus = () => {
	return useQuery({
		queryFn: checkStatus,
		queryKey: ['status'],
		retry: false,
	});
};

export default useCheckStatus;
