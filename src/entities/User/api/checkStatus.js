import Api from 'shared/api';
import { apiEndpoints, baseUrl } from 'shared/model';

export const checkStatus = async () => {
	const api = new Api();

	try {
		return await api.Get(`${baseUrl}${apiEndpoints.STATUS}`);
	} catch (e) {
		throw Error(e);
	}
};
