import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRoutes, createRoute } from 'shared/router';
import { Button } from 'shared/ui/Button';

const CreateDocumentByTemplateButton = () => {
	return (
		<Link to={createRoute(AppRoutes.LETTER)}>
			<Button
				variant="outlined"
				style={{
					'--bg': 'var(--tertiary)',
					borderWidth: '2px',
					boxShadow: '0 1px 2px 0 #0000001F, 0 1px 3px 1px #0000001F',
				}}
			>
				<Typography
					variant="M20"
					color="var(--tertiary)"
				>
					Заполнить бланк
				</Typography>
			</Button>
		</Link>
	);
};

export default CreateDocumentByTemplateButton;
