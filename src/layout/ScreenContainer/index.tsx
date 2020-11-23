import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { useThemeToggle } from '../../components/ThemeToggleProvider';
import LateralMenu from '../LateralMenu';
import { Container, MainScrollbar } from '../styles';
import light from '../../styles/light.theme';
import dark from '../../styles/dark.theme';
import { useBreadcrumb } from '../../components/BreadcrumbProvider';
import HeaderToolbar from '../HeaderToolbar';
import { BiStar } from 'react-icons/bi';
import { useAuth } from '../../components/AuthProvider';
import { useMediaQuery } from 'atomic-layout';
import Sidebar from '../Sidebar';
import Scrollbar from 'react-scrollbars-custom';

const grid = `
    menu header
    menu principal
    menu footer
`;

const mobileGrid = `
    header
    principal
    footer
`;

const ScreenContainer: React.FC = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { user } = useAuth();
    const { scheme } = useThemeToggle();
    const { breadcrumbs } = useBreadcrumb();
    const isMobileScreen = useMediaQuery({ maxWidth: 767 });
    return (
        <ThemeProvider theme={scheme === 'light' ? light : dark}>
            {isMobileScreen && <Sidebar show={showSidebar} userName={user?.username ?? ''} onFallbackClick={() => setShowSidebar(false)} />}
            <Container areas={isMobileScreen ? mobileGrid : grid} templateRows="0.1fr 1fr 0.1fr" templateCols={isMobileScreen ? "1fr" : "80px 1fr"}>
                {({ Menu, Header, Principal, Footer }: any) => (
                    <>
                        <Menu as="nav">
                            <LateralMenu />
                        </Menu>
                        <Header as="header" style={{ marginRight: 15, marginLeft: 15 }}>
                            <HeaderToolbar title="Título" userName={user?.username ?? ''} onMenuClick={() => setShowSidebar(true)} />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {breadcrumbs}
                            </div>
                        </Header>
                        <Principal as="main" style={{ marginRight: 15, marginLeft: 15 }}>
                            <MainScrollbar >
                                {children}
                            </MainScrollbar>
                        </Principal>
                        <Footer as="footer" style={{ marginRight: 15, marginLeft: 15 }}>
                            <p>Aqui é o Rodapé <BiStar /> </p>
                        </Footer>
                    </>
                )}
            </Container>
        </ThemeProvider>
    )
}

export default ScreenContainer