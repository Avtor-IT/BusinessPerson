import Api from 'shared/api';
import { apiEndpoints, baseUrl } from 'shared/model';

export const getCurrentUser = async () => {
	const api = new Api();

	try {
		return await api.Get(`${baseUrl}${apiEndpoints.ME}`);
	} catch (e) {
		throw Error('Не удалось получить информацию о пользователе');
	}
};
