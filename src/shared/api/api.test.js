import axios from 'axios';
import Api from './index';
import { apiEndpoints, baseUrl } from 'shared/model/index.js';

jest.mock('axios'); // Мокинг axios

describe('Api class', () => {
	let api;

	beforeEach(() => {
		api = new Api();
		sessionStorage.clear();
	});

	afterEach(() => {
		jest.clearAllMocks(); // Чистим моки после каждого теста
	});

	describe('Get', () => {
		it('should make a GET request and return data on success', async () => {
			const mockData = { data: 'test data' };
			const url = '/test-url';
			const params = { key: 'value' };

			axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

			const result = await api.Get(url, params);

			expect(axios.get).toHaveBeenCalledWith(url, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
				params,
			});
			expect(result).toEqual(mockData);
		});

		it('should remove tokens from sessionStorage on 403', async () => {
			const url = '/test-url';
			const params = { key: 'value' };

			axios.get.mockResolvedValueOnce({ status: 403 });

			sessionStorage.setItem('access', 'mockAccess');
			sessionStorage.setItem('refresh', 'mockRefresh');

			await api.Get(url, params);

			expect(sessionStorage.getItem('access')).toBeNull();
			expect(sessionStorage.getItem('refresh')).toBeNull();
		});

		it('should handle request failure and reject the promise', async () => {
			const mockError = new Error('Request failed');
			axios.get.mockRejectedValueOnce(mockError);

			await expect(api.Get('/test-url')).rejects.toThrow(
				'Request failed'
			);
			expect(sessionStorage.getItem('access')).toBeNull();
			expect(sessionStorage.getItem('refresh')).toBeNull();
		});
	});

	describe('Post', () => {
		it('should make a POST request and return data on success', async () => {
			const mockData = { data: 'test data' };
			const url = '/test-url';
			const params = { key: 'value' };

			axios.post.mockResolvedValueOnce({ status: 200, data: mockData });

			const result = await api.Post(url, params);

			expect(axios.post).toHaveBeenCalledWith(url, params, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('access'),
				},
			});
			expect(result).toEqual(mockData);
		});

		it('should handle request failure and reject the promise', async () => {
			const mockError = new Error('Request failed');
			axios.post.mockRejectedValueOnce(mockError);

			await expect(api.Post('/test-url')).rejects.toThrow(
				'Request failed'
			);
			expect(sessionStorage.getItem('access')).toBeNull();
			expect(sessionStorage.getItem('refresh')).toBeNull();
		});
	});

	describe('GetAccessToken', () => {
		it('should verify access token and return response', async () => {
			const mockResponse = { data: { token: 'verified' } };

			sessionStorage.setItem('access', 'mockAccessToken');
			axios.post.mockResolvedValueOnce(mockResponse);

			const result = await api.GetAccessToken();

			expect(axios.post).toHaveBeenCalledWith(
				`${baseUrl}${apiEndpoints.JWT_VERIFY}`,
				{ token: 'mockAccessToken' }
			);
			expect(result).toEqual(mockResponse);
		});

		it('should call RefreshToken on 401 error if refresh and access tokens exist', async () => {
			const mockError = { response: { status: 401 } };
			const refreshTokenSpy = jest
				.spyOn(api, 'RefreshToken')
				.mockResolvedValueOnce('newAccessToken');

			sessionStorage.setItem('refresh', 'mockRefreshToken');
			sessionStorage.setItem('access', 'mockAccessToken');
			axios.post.mockRejectedValueOnce(mockError);

			await api.GetAccessToken();

			expect(refreshTokenSpy).toHaveBeenCalled();
		});

		it('should remove tokens from sessionStorage on error', async () => {
			const mockError = { response: { status: 500 } };

			sessionStorage.setItem('access', 'mockAccess');
			sessionStorage.setItem('refresh', 'mockRefresh');
			axios.post.mockRejectedValueOnce(mockError);

			await expect(api.GetAccessToken()).rejects.toEqual(mockError);
			expect(sessionStorage.getItem('access')).toBeNull();
			expect(sessionStorage.getItem('refresh')).toBeNull();
		});
	});

	describe('RefreshToken', () => {
		it('should refresh the token and update sessionStorage', async () => {
			const mockResponse = { data: { access: 'newAccessToken' } };

			sessionStorage.setItem('refresh', 'mockRefreshToken');
			axios.post.mockResolvedValueOnce(mockResponse);

			const result = await api.RefreshToken();

			expect(axios.post).toHaveBeenCalledWith(
				`${baseUrl}${apiEndpoints.JWT_REFRESH}`,
				{ refresh: 'mockRefreshToken' }
			);
			expect(sessionStorage.getItem('access')).toBe('newAccessToken');
			expect(result).toEqual(mockResponse.data);
		});

		it('should remove tokens from sessionStorage on error', async () => {
			const mockError = new Error('Refresh failed');

			sessionStorage.setItem('access', 'mockAccess');
			sessionStorage.setItem('refresh', 'mockRefresh');
			axios.post.mockRejectedValueOnce(mockError);

			await expect(api.RefreshToken()).rejects.toThrow('Refresh failed');
			expect(sessionStorage.getItem('access')).toBeNull();
			expect(sessionStorage.getItem('refresh')).toBeNull();
		});
	});
});
