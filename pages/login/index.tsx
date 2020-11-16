import React from 'react'
import LoginLayout from './LoginLayout';
import ScreenContainer from './ScreenContainer'

const LoginPage: React.FC = () => {
    return (
        <LoginLayout>
            <ScreenContainer>
                <span>Login</span>
                <input />
            </ScreenContainer>
        </LoginLayout>
    )
}

export default LoginPage