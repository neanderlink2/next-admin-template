import React from 'react'
import { ItemNavegacao, Navegacao } from './styles'
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { navigationItems } from '../../routes';

const LateralMenu = () => {    
    return (
        <Navegacao>
            <ItemNavegacao header>
                <BiUser size={32} />
            </ItemNavegacao>
            {navigationItems.map((nav, i) => (
                <ItemNavegacao key={`nav-item-${i}`}>
                    <Link href={nav.href}>
                        <a>{nav.icon}</a>
                    </Link>
                </ItemNavegacao>
            ))}
        </Navegacao>
    )
}

export default LateralMenu
