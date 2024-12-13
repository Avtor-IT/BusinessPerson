import { Suspense } from 'react';
import { SideMenu } from 'widgets/SideMenu';
import { LogoLink } from 'widgets/LogoLink';
import { Navigation } from 'widgets/Navigation';
import { Header } from 'widgets/Header';
import LogoText, { LogoIcon } from 'shared/ui/Logo';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Stack } from '@mui/system';

export const Layout = () => (
	<Container
		fixed
		maxWidth="xl"
	>
		<Stack
			direction="row"
			spacing="32px"
			pt="32px"
		>
			<SideMenu>
				<LogoLink style={{ marginBottom: 64 }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="center"
						spacing="16px"
					>
						<LogoIcon />
						<LogoText />
					</Stack>
				</LogoLink>
				<Navigation />
			</SideMenu>
			<Box flexGrow={1}>
				<Header style={{ marginBottom: 64 }} />
				<Suspense fallback={<div>loading</div>}>
					<Outlet />
				</Suspense>
			</Box>
		</Stack>
	</Container>
);
