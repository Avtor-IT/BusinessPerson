import { Box } from '@mui/system';
import { Button } from 'shared/ui/Button';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Typography } from '@mui/material';

export const NotFoundPage = () => {
	return (
		<Box>
			<Typography variant="h3">Страница не найдена</Typography>
			<Box mt={2}>
				<Button>
					<Link
						to={RoutePath[AppRoutes.MAIN]}
						replace
					>
						На главную
					</Link>
				</Button>
			</Box>
		</Box>
	);
};
