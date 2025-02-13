const arrayBufferToBase64 = (buffer) =>
	new Promise((res, rej) => {
		const blob = new Blob([buffer]);
		const reader = new FileReader();

		reader.onloadend = () => {
			const base64string = reader.result.split(',')[1]; // delete prefix "data:*/*;base64,"
			res(base64string);
		};

		reader.onerror = rej;
		reader.readAsDataURL(blob);
	});

export default arrayBufferToBase64;
