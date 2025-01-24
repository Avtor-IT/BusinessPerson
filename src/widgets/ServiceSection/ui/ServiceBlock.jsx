import { Skeleton, Typography } from '@mui/material';
import cls from './ServiceBlock.module.scss';
import { Stack } from '@mui/system';

const ServiceBlock = ({ serviceTitle, children }) => {
	return (
		<Stack
			className={cls.ServiceBlock}
			spacing={{ xs: '32px' }}
			marginBlock="54px"
			minHeight="520px"
		>
			<Typography variant="M32">
				{serviceTitle || (
					<Skeleton
						variant="text"
						height="60px"
					/>
				)}
			</Typography>

			{children || (
				<Skeleton
					variant="rectangular"
					height="520px"
				/>
			)}
		</Stack>
	);
};

export default ServiceBlock;
