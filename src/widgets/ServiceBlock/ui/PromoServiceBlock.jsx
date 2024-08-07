import React, { cloneElement, useState } from 'react';
import { Card } from 'shared/ui/Card';
import { Grid, Typography } from '@mui/material';
import { Stack, useMediaQuery } from '@mui/system';
import cls from './PromoServiceBlock.module.scss';
import AddSquareIcon from 'shared/assets/AddSquareIcon';
import { Button } from 'shared/ui/Button';

const PromoServiceBlock = ({ title, tagList, icon }) => {
	const [pickedTag, pickTag] = useState(0);
	const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'));

	const iconWithClassName =
		icon &&
		cloneElement(icon, {
			className: cls.PromoIcon,
			style: {
				top: matches ? '-15px' : 0,
				right: matches ? '350px' : '200px',
				height: matches ? undefined : '100%',
			},
		});

	const [isHover, setHover] = useState(false);
	const [isActive, setActive] = useState(false);

	return (
		<Card className={cls.Promo}>
			{iconWithClassName}
			<Grid
				container
				justifyContent="space-between"
				sx={{ position: 'relative', zIndex: 1 }}
			>
				<Grid
					item
					xs={6}
				>
					<Stack
						justifyContent="space-between"
						height="100%"
					>
						<Typography
							variant="R48"
							component="div"
						>
							Подключить {title.toLowerCase()}
						</Typography>
						<Stack
							direction="row"
							spacing="9px"
							useFlexGap
							flexWrap="wrap"
						>
							{tagList.map((tag, i) => (
								<Typography
									key={tag.name}
									variant="R20"
									className={`${cls.Tag} ${
										i === pickedTag ? cls.pickedTag : ''
									}`}
									sx={{ width: matches ? 'auto' : '100%' }}
									onClick={() => pickTag(i)}
								>
									{tag.name}
								</Typography>
							))}
						</Stack>
					</Stack>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Stack
						direction={matches ? 'row' : 'column'}
						spacing="13px"
						alignItems="end"
						justifyContent="space-between"
						minHeight="100%"
					>
						<Typography
							variant="R16"
							className={cls.Tip}
						>
							{tagList[pickedTag].description}
						</Typography>
						<Button
							variant="unStyled"
							style={{
								width: '257px',
								marginBlock: matches ? 'auto' : undefined,
								marginTop: matches ? undefined : 'auto',
							}}
							onMouseEnter={() => {
								setHover(true);
							}}
							onMouseDown={() => setActive(true)}
							onTouchStart={() => setActive(true)}
							onMouseLeave={() => {
								setHover(false);
								setActive(false);
							}}
							onMouseUp={() => {
								setActive(false);
								setHover(false);
							}}
							onTouchEnd={() => {
								setActive(false);
								setHover(false);
							}}
						>
							<AddSquareIcon
								width="100%"
								style={{
									filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2))',
								}}
								theme="dark"
								status={
									isActive ? 'active' : isHover && 'hover'
								}
							/>
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Card>
	);
};

export default PromoServiceBlock;
