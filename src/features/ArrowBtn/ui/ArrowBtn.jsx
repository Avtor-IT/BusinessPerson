import ArrowIcon from 'shared/assets/icons/Arrow';
import { Button } from 'shared/ui/Button';

const ArrowBtn = ({ ...otherProps }) => {
	return (
		<Button
			{...otherProps}
			style={{ width: '24px', height: '24px' }}
			variant="unStyled"
		>
			<ArrowIcon />
		</Button>
	);
};

export default ArrowBtn;
