import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/router';
import { Button } from 'shared/ui/Button';

export const NotFoundPage = () => {
	return (
		<Box>
			<Typography variant="M40">Страница не найдена</Typography>
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
