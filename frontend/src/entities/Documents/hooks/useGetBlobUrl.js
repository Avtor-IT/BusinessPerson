import getBlobUrl from '../api/getBlobUrl';
import { useQuery } from '@tanstack/react-query';

const useGetBlobUrl = (documentUrl) =>
	useQuery({
		queryFn: async () => await getBlobUrl(documentUrl),
		queryKey: ['open', documentUrl],
	});

export default useGetBlobUrl;
