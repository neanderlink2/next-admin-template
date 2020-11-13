import React from 'react'
import DropDownItem from './DropDownItem'
import { Container } from './styles'

const DropdownList = () => {
    return (
        <Container>
            <ul>                
                <DropDownItem>Perfil</DropDownItem>
                <DropDownItem>Sair</DropDownItem>
            </ul>
        </Container>
    )
}

export default DropdownList
