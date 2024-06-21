import React from 'react';
import { SideMenu } from 'widgets/SideMenu';
import { LogoLink } from 'widgets/LogoLink';
import { Navigation } from 'widgets/Navigation';
import { Header } from 'widgets/Header';
import { Logo } from 'shared/ui/Logo';
import AppRouter from '../providers/router/ui/AppRouter';

export const Layout = () => (
    <div
        className="container"
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
            <AppRouter />
        </div>
    </div>
);
