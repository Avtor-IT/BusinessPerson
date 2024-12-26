import { useMutation } from '@tanstack/react-query';
import downloadFile from '../api/downloadFile';

const useDownloadMutation = (documentId) =>
	useMutation({
		mutationFn: async ({ url, params }) => await downloadFile(url, params),
		mutationKey: ['download', documentId],
	});

export default useDownloadMutation;
