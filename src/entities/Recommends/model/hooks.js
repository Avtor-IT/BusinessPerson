import { useQuery } from '@tanstack/react-query';
import { getArrayRecomends } from 'shared/json';

export const useRecomendsQuery = () => {
	return useQuery({
		queryKey: ['recomends'], // recoMMends!!!!!
		queryFn: getArrayRecomends,
	});
};
