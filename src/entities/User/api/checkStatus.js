import Api from 'shared/api';
import { apiEndpoints, baseUrl } from 'shared/model';

export const checkStatus = async () => {
	const api = new Api();

	try {
		return await api.Get(`${baseUrl}${apiEndpoints.STATUS}`);
	} catch (_e) {
		throw Error('Не удалось проверить статус пользователя');
	}
};
