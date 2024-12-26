import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig';
import { Box, Typography } from '@mui/material';
import { Card } from 'shared/ui/Card';
import Circle from 'shared/assets/icons/Circle/ui/Circle';
import ArrowIcon from 'shared/assets/icons/Arrow/ui/ArrowIcon';
import IconButton from 'shared/ui/Button';
import CopyBtn from 'features/CopyBtn';
import cls from './MyDocuments.module.scss';
import { useGetPersonalDocuments } from 'entities/Documents/hooks/useGetPersonalDocuments';
// import AddSquareIcon from 'shared/assets/AddSquareIcon'; для возможного линка

export const MyDocuments = ({ ...props }) => {
	const [hovered, setHovered] = React.useState(false); // для анимации при наведении

	const { isLoading, error, data } = useGetPersonalDocuments();

	if (isLoading) return 'Loading...';

	if (error) return 'Error';

	return (
		<Card
			className={`${cls.MyDocuments}`}
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
			{...props}
		>
			<Circle
				width={678}
				height={678}
				bottom={-197}
				right={hovered ? 260 : 293}
			/>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				zIndex={'2'}
			>
				<Typography variant="M24">Мои документы</Typography>
				<IconButton className={`${cls.btnAddMyDocument}`}>
					<Typography variant="L16">Добавить</Typography>
				</IconButton>

				{/* или */}

				{/* <Link
				 to={RoutePath[AppRoutes.MAIN]}
				 className={`${cls.btnAddMyDocument}`}
				 >
				 <Typography variant="L16">Добавить</Typography>
				 <AddSquareIcon />
				 </Link> */}
			</Box>
			<Box
				marginTop={'32px'}
				zIndex={'2'}
			>
				<Typography variant="R20">
					Все необходимые документы <br /> всегда под рукой
				</Typography>
				<Link
					to={RoutePath[AppRoutes.MAIN]}
					className={`${cls.btnExpand}`}
				>
					<Typography variant="L16">Развернуть</Typography>
					<ArrowIcon variant="down" />
				</Link>
			</Box>
			<Box className={`${cls.arrayMyDocumnets}`}>
				{data.map((document, index) => (
					<Card
						key={index}
						style={{
							position: 'absolute',
							height: '291px',
							width: '246px',
							right: `${index * 50}px`,
							top: `${index * 56}px`,
							padding: '16px 32px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography variant="L20">{document}</Typography>
						<CopyBtn
							stroke="#3D3F4C"
							style={{ height: 'fit-content' }}
						/>
					</Card>
				))}
			</Box>
		</Card>
	);
};
