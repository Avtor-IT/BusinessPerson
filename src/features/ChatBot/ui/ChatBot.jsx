import React from 'react';
import SearchIcon from 'shared/assets/SearchIcon';
import { Input } from 'shared/ui/Input';
import cls from './ChatBot.module.scss';
import useWidth from 'shared/model';

export const ChatBot = ({ ...inputProps }) => {
	const size = useWidth();

	const getInputWidth = (size) => {
		switch (size) {
			case 'xl':
				return '782px';
			case 'lg':
				return '565px';
			default:
				return 'auto';
		}
	};

	return (
		<Input
			beforePlaceholder={
				<SearchIcon
					gradient={
						<>
							<linearGradient id="linear-gradient">
								<stop
									offset="0%"
									stopColor="var(--primary)"
								/>
								<stop
									offset="100%"
									stopColor="var(--secondary-light)"
								/>
							</linearGradient>
						</>
					}
				/>
			}
			style={{ minWidth: getInputWidth(size) }}
			className={cls.ChatBot}
			placeholder="Чат бот"
			{...inputProps}
		/>
	);
};
