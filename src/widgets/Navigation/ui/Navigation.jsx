import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import HomeIcon from 'shared/assets/icons/Home';
import ListIcon from 'shared/assets/icons/List';
import OfficeIcon from 'shared/assets/icons/Office';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { pageActions } from 'shared/model/pageSlice';
import { Button } from 'shared/ui/Button';
import Market from 'shared/assets/icons/Market';
import Document from 'shared/assets/icons/Document';
import cls from './Navigation.module.scss';

export const Navigation = () => {
	// const page = useSelector((state) => state.page.page);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const menu = {
		list: [
			{
				title: 'Главная',
				link: RoutePath[AppRoutes.MAIN],
				icon: <HomeIcon />,
			},
			{
				title: 'Моя компания',
				link: RoutePath[AppRoutes.COMPANY],
				icon: <ListIcon />,
			},
			{
				title: 'Маркетплейс',
				link: RoutePath[AppRoutes.MARKET],
				icon: <Market />,
			},
			{
				title: 'Конструктор письма',
				link: RoutePath[AppRoutes.LETTER],
				icon: <Document />,
			},
			{
				title: 'Обучение',
				link: RoutePath[AppRoutes.TUTORIAL],
				icon: <OfficeIcon />,
			},
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
						variant={
							window.location.pathname === el.link
								? 'contained'
								: 'text'
						}
						onClick={() => {
							dispatch(pageActions.setPage({ link: el.link }));
							navigate(el.link);
						}}
						className={`${cls.NavigationItem} ${
							window.location.pathname !== el.link
								? cls.isNotSelected
								: ''
						}`}
					>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="start"
							gap="16px"
						>
							{el.icon} {el.title}
						</Box>
					</Button>
				</Link>
			))}
		</div>
	);
};
