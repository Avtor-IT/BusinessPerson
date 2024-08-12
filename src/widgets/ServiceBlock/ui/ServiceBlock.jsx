import React from 'react';
import { Grid, Skeleton, Typography } from '@mui/material';
import cls from './ServiceBlock.module.scss';

const ServiceBlock = ({ serviceTitle, children }) => {
	return (
		<Grid
			container
			columns={6}
			className={cls.ServiceBlock}
			spacing={{ xs: '16px' }}
			marginBottom={'32px'}
		>
			<Grid
				item
				xs={6}
				xl={1}
				className={cls.ServiceTitle}
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
				className={cls.serviceContent}
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
