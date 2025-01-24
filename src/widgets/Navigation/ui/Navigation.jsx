import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import HomeIcon from 'shared/icons/Home';
import ListIcon from 'shared/icons/List';
import OfficeIcon from 'shared/icons/Office';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Button } from 'shared/ui/Button';
import Market from 'shared/icons/Market';
import Document from 'shared/icons/Document';
import cls from './Navigation.module.scss';

export const Navigation = ({ ...props }) => {
	const navigate = useNavigate();
	const location = useLocation();

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
		<Box
			className={cls.NavigationList}
			{...props}
		>
			{menu.list.map((el) => {
				const isActive =
					el.link === RoutePath[AppRoutes.COMPANY]
						? location.pathname.startsWith(el.link) // Для "Моя компания" проверяем, начинается ли путь с /company
						: location.pathname === el.link; // Для остальных точное совпадение

				return (
					<Link
						key={el.link}
						to={el.link}
					>
						<Button
							variant={isActive ? 'contained' : 'text'}
							onClick={() => {
								// dispatch(pageActions.setPage({ link: el.link }));
								navigate(el.link);
							}}
							className={`${cls.NavigationItem} ${
								isActive ? '' : cls.isNotSelected
							}`}
						>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="start"
								gap="16px"
							>
								{el.icon}
								<Typography variant="L16">
									{el.title}
								</Typography>
							</Box>
						</Button>
					</Link>
				);
			})}
		</Box>
	);
};
