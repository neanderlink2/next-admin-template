import React from 'react'
import { BiX } from 'react-icons/bi'
import { InlineFlex } from '../../styles/index.global'
import { IconButton } from '../Button'
import { Container, Background, Fallback } from './styles'

type Props = {
    show: boolean;
    title: React.ReactNode;
    titleStyles?: React.CSSProperties;
    onFallbackClick?: () => void;
}

const Modal: React.FC<Props> = ({ children, titleStyles, show, title, onFallbackClick }) => {
    return (
        <Background show={show} >
            <Fallback onClick={onFallbackClick} />
            <Container>
                <InlineFlex spaceBetween style={titleStyles}>
                    {title}
                    <IconButton onClick={onFallbackClick}><BiX /></IconButton>
                </InlineFlex>
                <hr />
                {children}
            </Container>
        </Background>
    )
}

export default Modal;