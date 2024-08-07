import React, { cloneElement } from 'react';
import AddSquareIcon from 'shared/assets/AddSquareIcon/ui/AddSquareIcon';
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
