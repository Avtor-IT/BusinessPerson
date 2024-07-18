import React, { useState } from 'react';
import cls from './LoginPage.module.scss';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLogin = () => {
        if (!login || !password) {
            setShowErrorMessage(true);
            return;
        }
        // const params = {
        //     login: login,
        //     password: password,
        // };
    };

    return (
        <div className={cls.LoginPage}>
            <h1>Login page</h1>
            <div className={cls.loginForm}>
                <label>
                    Login:{' '}
                    <input
                        type="text"
                        placeholder="enter login"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:{' '}
                    <input
                        type="password"
                        placeholder="enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {showErrorMessage && <p>Please enter login and password</p>}
                <button
                    type="submit"
                    onClick={handleLogin}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
