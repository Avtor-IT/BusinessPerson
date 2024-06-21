import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RoutePath, AppRoutes } from 'shared/config/routeConfig';
import { Button } from 'shared/ui/Button';
import { pageActions } from 'shared/model/pageSlice';
import cls from './Navigation.module.scss';

export const Navigation = () => {
    const page = useSelector((state) => state.page.page);

    const dispatch = useDispatch();

    const menu = {
        list: [
            { title: 'Главная', link: RoutePath[AppRoutes.MAIN] },
            { title: 'Мои услуги', link: RoutePath[AppRoutes.SERVICES] },
            { title: 'Обращения', link: RoutePath[AppRoutes.APPEALS] },
            { title: 'Обучение', link: RoutePath[AppRoutes.TUTORIAL] },
        ],
    };

    return (
        <div className={cls.NavigationList}>
            {menu.list.map((el) => (
                <Link
                    key={el.link}
                    to={el.link}
                >
                    <Button
                        variant={page.link === el.link ? 'contained' : 'text'}
                        onClick={() => {
                            dispatch(pageActions.setPage({ link: el.link }));
                        }}
                        style={{ width: '100%', textAlign: 'left' }}
                    >
                        {el.title}
                    </Button>
                </Link>
            ))}
        </div>
    );
};
