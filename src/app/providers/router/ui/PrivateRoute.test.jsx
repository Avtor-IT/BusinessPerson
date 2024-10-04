import { render, screen } from '@testing-library/react';
import PrivateRoute from './PrivateRoute';
import { useCheckStatus } from 'entities/User';

jest.mock('entities/User', () => ({
	useCheckStatus: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
	useQueryClient: jest.fn(() => ({
		invalidateQueries: jest.fn(),
	})),
}));

jest.mock('react-router-dom', () => ({
	useLocation: jest.fn(() => ({
		pathname: '/test-path',
	})),
	Navigate: jest.fn(),
}));

describe('PrivateRoute', () => {
	beforeEach(() => {
		useCheckStatus.mockImplementation(() => ({}));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render loader while pending', () => {
		useCheckStatus.mockReturnValue({
			isPending: true,
			data: null,
			error: null,
		});

		render(<PrivateRoute />);

		expect(screen.getByTestId('loader')).toBeInTheDocument();
	});
});
