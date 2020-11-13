import React from 'react'
import { ItemNavegacao, Navegacao } from './styles'
import { BiUser, BiHome, BiAdjust } from 'react-icons/bi';
import Link from 'next/link';

const LateralMenu = () => {
    return (
        <Navegacao>
            <ItemNavegacao header>
                <BiUser size={32} />
            </ItemNavegacao>
            <ItemNavegacao>
                <Link href="/">
                    <BiHome size={20} />
                </Link>
            </ItemNavegacao>
            <ItemNavegacao>
                <Link href="/config">
                    <BiAdjust size={20} />
                </Link>
            </ItemNavegacao>
        </Navegacao>
    )
}

export default LateralMenu
