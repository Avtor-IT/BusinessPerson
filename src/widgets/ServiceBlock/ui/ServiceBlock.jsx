import { Grid, Skeleton, Typography } from '@mui/material';
import cls from './ServiceBlock.module.scss';

const ServiceBlock = ({ serviceTitle, children }) => {
	return (
		<Grid
			container
			columns={6}
			className={cls.ServiceBlock}
			columnSpacing={{ xs: '16px' }}
			marginBottom={'54px'}
		>
			<Grid
				item
				xl={6}
				className={cls.ServiceTitle}
				marginBottom={'32px'}
			>
				<Typography variant="M24">
					{serviceTitle || (
						<Skeleton
							variant="rounded"
							height="60px"
						/>
					)}
				</Typography>
			</Grid>
			<Grid
				item
				xs={6}
				xl={5}
				className={cls.ServiceContent}
			>
				{children || (
					<Skeleton
						variant="rounded"
						height="310px"
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default ServiceBlock;
