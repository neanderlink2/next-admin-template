import Link from 'next/link'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { navigationItems } from '../../routes'
import { ContainerSidebar, Background, Fallback, Navegacao, ItemNavegacao } from './styles'

type Props = {
    show: boolean;
    userName?: string;
    onFallbackClick?: () => void;
}

const Sidebar: React.FC<Props> = ({ show, userName, onFallbackClick }) => {
    return (
        <Background show={show} >
            <Fallback onClick={onFallbackClick} show />
            <ContainerSidebar>
                <Navegacao>
                    <ItemNavegacao header>
                        <BiUser size={32} />
                        <span style={{ marginBottom: 15 }}>{userName}</span>
                    </ItemNavegacao>
                    {navigationItems.map((nav, i) => (
                        <ItemNavegacao key={`nav-item-${i}`}>
                            <Link href={nav.href}>
                                <a>{nav.icon} {nav.title}</a>
                            </Link>
                        </ItemNavegacao>
                    ))}
                </Navegacao>
            </ContainerSidebar>
        </Background>
    )
}

export default Sidebar;