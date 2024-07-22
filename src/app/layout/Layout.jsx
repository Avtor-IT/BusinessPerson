import React, { Suspense } from 'react';
import { SideMenu } from 'widgets/SideMenu';
import { LogoLink } from 'widgets/LogoLink';
import { Navigation } from 'widgets/Navigation';
import { Header } from 'widgets/Header';
import { LogoIcon, LogoText } from 'shared/ui/Logo';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

export const Layout = () => (
    <Container
        style={{ display: 'flex', gap: 32, paddingTop: 34 }}
        fixed
        maxWidth="xl"
    >
        <SideMenu>
            <Box>
                <LogoLink style={{ marginBottom: 62 }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={'14px'}
                    >
                        <LogoIcon />
                        <LogoText />
                    </Box>
                </LogoLink>
                <Navigation />
            </Box>
        </SideMenu>
        <Box flex={1}>
            <Header style={{ marginBottom: 62 }} />
            <Suspense fallback={<div>Загрузка</div>}>
                <Outlet />
            </Suspense>
        </Box>
    </Container>
);
