import React, { cloneElement } from 'react';
import cls from './Input.module.scss';

const Input = ({
	className,
	style,
	beforePlaceholder,
	afterPlaceholder,
	inputStyle,
	...inputProps
}) => {
	const BeforeWithProps =
		beforePlaceholder &&
		cloneElement(beforePlaceholder, {
			className: cls.IconBefore,
		});
	const AfterWithProps =
		afterPlaceholder &&
		cloneElement(afterPlaceholder, {
			className: cls.IconAfter,
		});

	return (
		<div
			className={`${cls.Input} ${className}`}
			style={style}
		>
			{BeforeWithProps}
			<input
				style={inputStyle}
				{...inputProps}
			/>
			{AfterWithProps}
		</div>
	);
};

export default Input;
