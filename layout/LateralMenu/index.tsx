import React from 'react'
import { ItemNavegacao, Navegacao } from './styles'
import { BiUser, BiHome, BiCommentDetail } from 'react-icons/bi';
import Link from 'next/link';
import { navigationItems } from '../../routes';

const LateralMenu = () => {
    return (
        <Navegacao>
            <ItemNavegacao header>
                <BiUser size={32} />
            </ItemNavegacao>
            {navigationItems.map((nav) => (
                <ItemNavegacao>
                    <Link href={nav.href}>
                        <a>{nav.icon}</a>
                    </Link>
                </ItemNavegacao>
            ))}
        </Navegacao>
    )
}

export default LateralMenu
