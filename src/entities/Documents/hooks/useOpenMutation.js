import { useMutation } from '@tanstack/react-query';
import OpenFile from '../api/openFile';

const useOpenMutation = (documentId) =>
	useMutation({
		mutationFn: async ({ url, params }) => await OpenFile(url, params),
		mutationKey: ['open', documentId],
	});

export default useOpenMutation;
