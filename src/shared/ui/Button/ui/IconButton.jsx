import { cloneElement } from 'react';
import AddSquareIcon from 'shared/icons/AddSquare';
import { Button } from 'shared/ui/Button';
import cls from './IconBtn.module.scss';

const IconButton = ({
	className,
	children,
	iconPos = 'end',
	color,
	icon = <AddSquareIcon color={color} />,
	...otherProps
}) => {
	if (!children) {
		return (
			<Button
				className={`${className} ${cls.IconButton}`}
				variant="unStyled"
				color={color}
				{...otherProps}
			>
				{icon}
			</Button>
		);
	}

	const childrenWithProps = cloneElement(children, {
		style: { color: color },
	});

	return (
		<Button
			className={`${className} ${cls.IconButton}`}
			variant="unStyled"
			color={color}
			{...otherProps}
		>
			{iconPos === 'end' ? childrenWithProps : null}
			{icon}
			{iconPos === 'start' ? childrenWithProps : null}
		</Button>
	);
};

export default IconButton;
