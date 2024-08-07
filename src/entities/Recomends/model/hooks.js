import { useQuery } from '@tanstack/react-query';
import { getArrayRecomends } from '../api/getArrayRecomends';

export const useRecomendsQuery = () => {
	return useQuery({
		queryKey: ['recomends'],
		queryFn: getArrayRecomends,
	});
};
