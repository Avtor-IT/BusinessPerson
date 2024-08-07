import { useQuery } from '@tanstack/react-query';
import { getArrayMyDocuments } from '../api/getArrayMyDocuments';

export const useDocumentsQuery = () => {
	return useQuery({
		queryKey: ['documents, personal'],
		queryFn: getArrayMyDocuments,
	});
};
