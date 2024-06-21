import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { Button } from 'shared/ui/Button';

export const Auth = () => {
    const dispatch = useDispatch();

    const login = () => {
        dispatch(
            userActions.setUser({ id: 1, name: 'Юзер', last_name: 'Юзеров' }),
        );
    };

    return (
        <Button
            onClick={login}
            variant={'text'}
        >
            Войти / Зарегистрироваться
        </Button>
    );
};
