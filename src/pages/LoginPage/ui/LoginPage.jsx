import { useEffect, useState } from 'react';
import cls from './LoginPage.module.scss';
import useLoginMutation from 'features/Auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const navigate = useNavigate();

	const loginMutation = useLoginMutation();

	const handleLogin = (e) => {
		e && e.preventDefault();
		if (!userName || !password) {
			setErrorMessage('Введите имя и пароль');
			return;
		}
		const params = {
			username: userName,
			password: password,
		};
		loginMutation.mutate(params);
	};

	useEffect(() => {
		if (loginMutation.error) {
			if (loginMutation.error.message === 'Unauthorized') {
				setErrorMessage('Пользователь не найден');
			} else {
				console.error(loginMutation.error);
				setErrorMessage(
					'Ошибка при входе в аккаунт. Повторите попытку позже.'
				);
			}
			return;
		}

		if (loginMutation.data) {
			navigate('/', { replace: true });
		}
	}, [loginMutation, navigate]);

	return (
		<div className={cls.LoginPage}>
			<h1>Login page</h1>
			<form
				className={cls.loginForm}
				onSubmit={handleLogin}
			>
				<label>
					Login:{' '}
					<input
						type="text"
						placeholder="enter login"
						onChange={(e) => setUserName(e.target.value)}
						disabled={loginMutation.isPending}
						required
					/>
				</label>
				<br />
				<label>
					Password:{' '}
					<input
						type="password"
						placeholder="enter password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<p>{errorMessage}</p>
				<button disabled={loginMutation.isPending}>Enter</button>
			</form>
		</div>
	);
};

export default LoginPage;
