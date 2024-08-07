import React from 'react';
import { Grid, Typography } from '@mui/material';
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
				<Typography variant="M24">{serviceTitle}</Typography>
			</Grid>
			<Grid
				item
				xs={6}
				xl={5}
				className={cls.serviceContent}
			>
				{children}
			</Grid>
		</Grid>
	);
};

export default ServiceBlock;
