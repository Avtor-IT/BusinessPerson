import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoutes, RoutePath} from 'shared/config/routeConfig';
import {Button} from 'shared/ui/Button';
import {pageActions} from 'shared/model/pageSlice';
import cls from './Navigation.module.scss';
import {Box} from "@mui/material";
import {HomeIcon} from "shared/assets/HomeIcon";
import {ListIcon} from "shared/assets/ListIcon";
import {LetterIcon} from "shared/assets/LetterIcon";
import {OfficeIcon} from "shared/assets/ OfficeIcon";

export const Navigation = () => {
    const page = useSelector((state) => state.page.page);

    const dispatch = useDispatch();

    const menu = {
        list: [
            {title: 'Главная', link: RoutePath[AppRoutes.MAIN], icon: <HomeIcon/>},
            {title: 'Мои услуги', link: RoutePath[AppRoutes.SERVICES], icon: <ListIcon/>},
            {title: 'Обращения', link: RoutePath[AppRoutes.APPEALS], icon: <LetterIcon/>},
            {title: 'Обучение', link: RoutePath[AppRoutes.TUTORIAL], icon: <OfficeIcon/>},
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
                            dispatch(pageActions.setPage({link: el.link}));
                        }}
                        style={{width: '100%', textAlign: 'left'}}
                    >
                        <Box display="flex" alignItems="center" gap="16px">
                            {el.icon} {el.title}
                        </Box>
                    </Button>
                </Link>
            ))}

        </div>
    );
};
