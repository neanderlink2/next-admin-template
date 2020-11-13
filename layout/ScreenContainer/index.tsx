import React from 'react'
import { ThemeProvider } from 'styled-components';
import { useThemeToggle } from '../../components/ThemeToggleProvider';
import LateralMenu from '../LateralMenu';
import { Container } from '../styles';
import light from '../../styles/light.theme';
import dark from '../../styles/dark.theme';
import { useBreadcrumb } from '../../components/BreadcrumbProvider';
import HeaderToolbar from '../HeaderToolbar';

const grid = `
    menu header
    menu principal
    menu footer
`;

const ScreenContainer: React.FC = ({ children }) => {
    const { scheme, toggleColorSchema } = useThemeToggle();
    const { breadcrumbs } = useBreadcrumb();

    return (
        <ThemeProvider theme={scheme === 'light' ? light : dark}>
            <Container areas={grid} templateRows="0.1fr 1fr 0.1fr" templateCols="90px 1fr">
                {({ Menu, Header, Principal, Footer }: any) => (
                    <>
                        <Menu as="nav">
                            <LateralMenu />
                        </Menu>
                        <Header as="header">
                            <HeaderToolbar title="Título" userName="Usuário teste" /> 
                            {breadcrumbs}
                        </Header>
                        <Principal as="main">
                            <button onClick={toggleColorSchema}>Toggle</button>
                            {children}
                        </Principal>
                        <Footer as="footer">
                            <p>footer</p>
                        </Footer>
                    </>
                )}
            </Container>
        </ThemeProvider>
    )
}

export default ScreenContainer