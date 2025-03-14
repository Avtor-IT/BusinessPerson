import getBlob from '../api/getBlob';
import { useQuery } from '@tanstack/react-query';

const useGetBlob = (documentUrl) =>
	useQuery({
		queryFn: async () => await getBlob(documentUrl),
		queryKey: ['blob', documentUrl],
	});

export default useGetBlob;
