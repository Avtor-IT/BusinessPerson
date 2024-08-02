import React, { useState } from 'react';
import { Card } from 'shared/ui/Card';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import cls from './PromoServiceBlock.module.scss';
import AddSquareIcon from 'shared/assets/AddSquareIcon';
import { Button } from 'shared/ui/Button';

const PromoServiceBlock = ({ title, tagList }) => {
	const [pickedTag, pickTag] = useState(0);

	return (
		<Card className={cls.Promo}>
			<Grid
				container
				justifyContent="space-between"
			>
				<Grid
					item
					xs={6}
				>
					<Typography
						variant="R48"
						marginBottom="63px"
						component="div"
					>
						{title}
					</Typography>
					<Stack
						direction="row"
						spacing="9px"
						useFlexGap
						flexWrap="wrap"
					>
						{tagList.map((tag, i) => (
							<Typography
								key={tag}
								variant="R20"
								className={`${cls.Tag} ${
									i === pickedTag ? cls.pickedTag : ''
								}`}
								onClick={() => pickTag(i)}
							>
								{tag.name}
							</Typography>
						))}
					</Stack>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Stack
						direction="row"
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
								marginBlock: 'auto',
							}}
						>
							<AddSquareIcon
								width="100%"
								stroke="var(--bg-additional-color)"
								style={{
									filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2))',
								}}
							/>
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Card>
	);
};

export default PromoServiceBlock;
