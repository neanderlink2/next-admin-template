import Head from 'next/head'
import React from 'react'
import ThemeToggleProvider from '../../../components/ThemeToggleProvider'
import useUser from '../../../hooks/useUser'
import { Container } from '../../../layout/styles'

const LoginLayout: React.FC = ({ children }) => {
    useUser({        
        redirectTo: '/',
        redirectIfFound: true
    });
    
    return (
        <ThemeToggleProvider initialSchema="light">
            <Head>
                <title>Login</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>                        
            <Container>                
                {children}
            </Container>
        </ThemeToggleProvider>
    )
}

export default LoginLayout
