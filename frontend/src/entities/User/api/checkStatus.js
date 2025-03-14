import { apiCaller } from 'shared/api';

export const checkStatus = async () => {
	try {
		return apiCaller('STATUS');
	} catch (_e) {
		throw Error('Не удалось проверить статус пользователя');
	}
};
