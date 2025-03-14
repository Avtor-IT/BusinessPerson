import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ButtonCard } from 'shared/ui/Button';

const ReportsList = ({ listTitle, listItems, active, onItemClick }) => {
	const handleActive = (item) => {
		if (active) {
			return active(item);
		}
	};
	const handleClick = (item) => {
		if (onItemClick) {
			return onItemClick(item);
		}
	};

	return (
		<Stack gap={1}>
			<Typography
				variant="M20"
				color="var(--secondary)"
			>
				{listTitle}
			</Typography>
			<Stack
				direction="row"
				gap={1}
				flexWrap="wrap"
			>
				{listItems.map((item, i) => (
					<ButtonCard
						key={i}
						active={handleActive(item)}
						onClick={() => handleClick(item)}
					>
						<Typography variant="R16">{item.title}</Typography>
					</ButtonCard>
				))}
			</Stack>
		</Stack>
	);
};

export default ReportsList;
