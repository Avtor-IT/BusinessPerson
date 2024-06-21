import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RoutePath, AppRoutes } from 'shared/config/routeConfig';
import { pageActions } from 'shared/model/pageSlice';
import cls from './LogoLink.module.scss';

export const LogoLink = ({ className, children, ...props }) => {
    const dispatch = useDispatch();

    return (
        <Link
            className={`${cls.logoContainer} ${className}`}
            to={RoutePath[AppRoutes.MAIN]}
            onClick={() => {
                dispatch(
                    pageActions.setPage({
                        link: RoutePath[AppRoutes.MAIN],
                    }),
                );
            }}
            style={{ marginInline: 'auto' }}
            {...props}
        >
            {children}
        </Link>
    );
};
