/**
 * API params
 **/

export const baseUrl = 'https://intizar.pythonanywhere.com/api/v1/';

export const apiEndpoints = {
	STATUS: 'auth/status/',
	ME: 'auth/users/me/',
	JWT_CREATE: 'auth/jwt/create/',
	JWT_VERIFY: 'auth/jwt/verify/',
	JWT_REFRESH: 'auth/jwt/refresh/',
	MANAGER: 'hooks/users_me_manager/',
	COMPANIES: 'hooks/user_me_company/',
	DOCUMENTS: 'hooks/user_company_documents/',
	USER_SERVICES: 'hooks/user-service/check-expiration/',
	DOWNLOAD_FILE: 'hooks/downloadfile/',
	UPLOAD_FILE: 'hooks/upload_user_file/',
};
