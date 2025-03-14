import { Suspense } from 'react';
import { SideMenu } from 'widgets/SideMenu';
import { LogoLink } from 'widgets/LogoLink';
import { Navigation } from 'widgets/Navigation';
import { Header } from 'widgets/Header';
import LogoText, { LogoIcon } from 'shared/ui/Logo';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Box, Grid, Stack } from '@mui/system';
import { FallbackContent } from 'pages/FallbackPage';

export const Layout = () => (
	<Container
		fixed
		maxWidth="xl"
		sx={{ paddingTop: 4 }}
	>
		<Grid
			container
			columns={7}
			columnSpacing={2}
			rowSpacing={8}
		>
			<Grid size={1}>
				<Stack
					direction="row"
					justifyContent="center"
				>
					<LogoLink>
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
				</Stack>
			</Grid>
			<Grid size={6}>
				<Header />
			</Grid>

			<Grid size={1}>
				<Stack
					direction="row"
					justifyContent="center"
				>
					<Box
						paddingInline={2}
						width="100%"
					>
						<SideMenu>
							<Navigation />
						</SideMenu>
					</Box>
				</Stack>
			</Grid>
			<Grid size={6}>
				<Suspense fallback={<FallbackContent />}>
					<Outlet />
				</Suspense>
			</Grid>
		</Grid>
	</Container>
);
