import React from 'react';
import { SideMenu } from 'widgets/SideMenu';
import { LogoLink } from 'widgets/LogoLink';
import { Navigation } from 'widgets/Navigation';
import { Header } from 'widgets/Header';
import { Logo } from 'shared/ui/Logo';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Layout = () => (
    <Container
        // className="container"
        style={{ display: 'flex', gap: 32, paddingTop: 34 }}
    >
        <SideMenu>
            <div>
                <LogoLink style={{ marginBottom: 62 }}>
                    <Logo />
                    <span style={{ color: 'black' }}>Название</span>{' '}
                </LogoLink>
                <Navigation />
            </div>
        </SideMenu>
        <div style={{ flex: 1 }}>
            <Header style={{ marginBottom: 62 }} />
            <Outlet />
        </div>
    </Container>
);
