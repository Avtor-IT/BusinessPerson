import AddSquareIcon from 'shared/icons/AddSquare';
import { Button } from 'shared/ui/Button';

const IconButton = ({
	children,
	startIcon,
	endIcon = <AddSquareIcon />,
	...otherProps
}) => {
	return (
		<Button
			variant="unStyled"
			{...otherProps}
		>
			{startIcon}
			{children}
			{endIcon}
		</Button>
	);
};

export default IconButton;
