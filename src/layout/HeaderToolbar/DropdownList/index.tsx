import React from 'react'
import { useAuth } from '../../../components/AuthProvider'
import DropDownItem from './DropDownItem'
import { Container } from './styles'

const DropdownList = () => {
    const { sair } = useAuth();
    return (
        <Container>
            <ul>
                <DropDownItem>Perfil</DropDownItem>
                <DropDownItem onClick={sair}>Sair</DropDownItem>
            </ul>
        </Container>
    )
}

export default DropdownList
