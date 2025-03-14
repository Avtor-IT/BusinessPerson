import { apiCaller } from 'shared/api';

const uploadFile = async (fileName, base64) => {
	try {
		// @FIXME: закомментил, чтобы работало хоть как то
		// const contentType = base64.split(';')[0].split(':')[1];
		// const fileContent = base64.split(',')[1];

		return await apiCaller(
			'UPLOAD_FILE',
			'POST',
			{
				fileName,
				fileContent: base64,
			}
			// { 'Content-Type': contentType }
		);
	} catch (e) {
		throw Error(`Ошибка при загрузке файла ${fileName}: ${e.message}`);
	}
};

export default uploadFile;
