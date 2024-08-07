export const getArrayMyDocuments = async () => {
	const testArrayDocuments = ['СНИЛС', 'Устав', 'ОГРН', 'Паспорт'];
	try {
		return testArrayDocuments;
	} catch (e) {
		throw Error(e);
	}
};
