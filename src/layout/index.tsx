import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from '../styles/index.global';
import ThemeToggleProvider from '../components/ThemeToggleProvider';
import ScreenContainer from './ScreenContainer';
import useUser from '../hooks/useUser';

const Layout: React.FC = ({ children }) => {
    useUser({
        redirectTo: '/login',
        redirectIfFound: false
    })
    return (
        <ThemeToggleProvider initialSchema="light">
            <Head>
                <title>Administração</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <ScreenContainer>
                <GlobalStyles />
                {children}
            </ScreenContainer>
        </ThemeToggleProvider>
    )
}

export default Layout
