import React, { useState } from 'react'
import InputField from '../../components/Forms/InputField';
import LoginLayout from './LoginLayout';
import ScreenContainer from './ScreenContainer'
import { LoginCard, LoginContainer } from './styles';
import SubmitButton from '../../components/Forms/SubmitButton';
import { Formulario } from '../../components/Forms/styles';
import PasswordField from '../../components/Forms/PasswordField';
import { wait } from '../../utils/promiseUtils';
import { useRouter } from 'next/router'

const LoginPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(data: any) {
        setLoading(true);
        console.log(data);
        await wait(3000);
        setLoading(false);
        router.push('/');
    }

    return (
        <LoginLayout>
            <ScreenContainer>
                <LoginContainer>
                    <LoginCard>
                        <Formulario onSubmit={handleSubmit}>
                            <span>Seja bem-vindo(a) ao</span>
                            <h1>Admin</h1>
                            <InputField
                                name="login"
                                label="Nome de usuário"
                            />
                            <PasswordField
                                name="password"
                                label="Senha"
                            />
                            <SubmitButton loading={loading} fullWidth style={{ marginTop: 10 }}>Entrar</SubmitButton>
                        </Formulario>
                    </LoginCard>
                </LoginContainer>
            </ScreenContainer>
        </LoginLayout>
    )
}

export default LoginPage