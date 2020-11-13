import React from 'react'
import { HeaderTitle, Container } from './styles'

type Props = {
    title: string;
    userName: string;
}

const HeaderToolbar: React.FC<Props> = ({ title, userName }) => {
    return (
        <Container>
            <HeaderTitle>{title}</HeaderTitle>
            <span style={{ marginRight: 15 }}>{userName}</span>
        </Container>
    )
}

export default HeaderToolbar
