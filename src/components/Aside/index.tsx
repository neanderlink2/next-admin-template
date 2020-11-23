import React from 'react'
import { BiX } from 'react-icons/bi'
import { InlineFlex } from '../../styles/index.global'
import { IconButton } from '../Button'
import { ContainerAside, Background, Fallback } from './styles'

type Props = {
    show: boolean;
    title: React.ReactNode;
    titleStyles?: React.CSSProperties;
    onFallbackClick?: () => void;
}

const Aside: React.FC<Props> = ({ children, titleStyles, show, title, onFallbackClick }) => {
    return (
        <Background show={show} >
            <Fallback onClick={onFallbackClick} show />
            <ContainerAside>
                <InlineFlex spaceBetween style={titleStyles}>
                    {title}
                    <IconButton onClick={onFallbackClick}><BiX /></IconButton>
                </InlineFlex>
                <hr />
                {children}
            </ContainerAside>
        </Background>
    )
}

export default Aside;