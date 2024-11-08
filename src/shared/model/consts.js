/**
 * API params
 *
 **/

export const baseUrl = 'https://intizar.pythonanywhere.com/api/v1/';

export const apiEndpoints = {
	STATUS: 'auth/status',
	ME: 'auth/users/me',
	JWT_CREATE: 'auth/jwt/create',
	JWT_VERIFY: 'auth/jwt/verify',
	JWT_REFRESH: 'auth/jwt/refresh',
	MANAGER: 'hooks/users_me_manager/',
	COMPANIES: 'hooks/user_me_company/',
};

/**
 * BX24 params
 *
 **/

export const portalUrl = 'https://avtorit24.ru/';
export const webhookToken = 'rest/209/y8r6v3pwd77xn4ge/';
export const contactId = 5770;

export const BXEndpoints = {
	GET_CHAT_ID: 'imopenlines.crm.chat.get.json',
	GET_CHAT: 'imopenlines.session.history.get',
	GET_DIALOG_MESSAGES: 'im.dialog.messages.get',
};
