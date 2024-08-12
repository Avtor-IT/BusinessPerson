import React from 'react';
import { ChatBot } from 'features/ChatBot';
import ProfileBlock from 'widgets/ProfileBlock';
import cls from './Header.module.scss';
import { useMinWidth } from 'shared/model';
import { Box, Stack } from '@mui/system';

export const Header = ({ className, ...props }) => {
	const { lg } = useMinWidth();

	return (
		<header
			className={`${cls.Header} ${className}`}
			{...props}
		>
			<Stack
				direction="row"
				spacing="16px"
				justifyContent="space-between"
			>
				<Box
					alignSelf="center"
					height="100%"
					flexGrow={lg ? 1 : 0}
				>
					<ChatBot />
				</Box>
				<Box alignSelf="center">
					<ProfileBlock />
				</Box>
			</Stack>
		</header>
	);
};
