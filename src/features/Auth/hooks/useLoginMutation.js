import { useMutation } from '@tanstack/react-query';
import { login } from 'features/Auth';
import { useDispatch } from 'react-redux';
import { setToken } from 'entities/User';

const useLoginMutation = () => {
	const dispatch = useDispatch();
	return useMutation({
		mutationFn: async (params) => await login(params),
		onSuccess: (data) => {
			dispatch(setToken(data));
		},
	});
};

export default useLoginMutation;
