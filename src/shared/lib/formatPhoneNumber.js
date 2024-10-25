export function formatPhoneNumber(phone) {
	if (phone.startsWith('8')) {
		phone = phone.replace(/^8/, '+7');
	}

	if (phone.length !== 12) return phone;

	return phone.replace(
		/(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
		'$1 ($2) $3-$4-$5'
	);
}
