export const getPersonalDocuments = async () => {
	const testArrayDocuments = ['СНИЛС', 'Устав', 'ОГРН', 'Паспорт'];
	try {
		return testArrayDocuments;
	} catch (e) {
		throw Error('Ошибка получения документов: ' + e.message);
	}
};
