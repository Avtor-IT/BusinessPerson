import { cloneElement, useState } from 'react';
import { Card } from 'shared/ui/Card/index.js';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import cls from './PromoServiceBlock.module.scss';
import AddSquareIcon from 'shared/assets/AddSquareIcon/index.js';
import { Button } from 'shared/ui/Button/index.js';
import { useMaxWidth } from 'shared/model/index.js';

const PromoServiceBlock = ({ title, tagList, icon }) => {
	const [pickedTag, pickTag] = useState(0);
	const { xl, lg, md } = useMaxWidth();

	const iconWithClassName =
		icon &&
		cloneElement(icon, {
			className: cls.PromoIcon,
			style: {
				top: xl ? '-15px' : 0,
				right: xl ? '350px' : '200px',
				height: xl ? undefined : '100%',
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
					lg={6}
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
									sx={{
										width: xl ? 'auto' : '100%',
									}}
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
					lg={6}
					md={12}
				>
					<Stack
						direction={xl || !lg ? 'row' : 'column'}
						spacing="13px"
						alignItems={lg ? 'end' : 'center'}
						justifyContent="space-between"
						minHeight="100%"
					>
						<Typography
							variant="R16"
							className={cls.Tip}
							width={md && !lg ? '350px' : 'auto'}
						>
							{tagList[pickedTag].description}
						</Typography>
						<Button
							variant="unStyled"
							style={{
								width: md && !lg ? '150px' : '257px',
								marginBlock: xl ? 'auto' : undefined,
								marginTop: xl ? undefined : 'auto',
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
								// setHover(false);
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
