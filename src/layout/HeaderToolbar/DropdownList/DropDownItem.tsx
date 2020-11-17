import React from 'react'
import { DropdownStyledItem } from './styles'

type Props = {
    icon?: React.ReactNode,
    onClick?: () => void;
}

const DropDownItem: React.FC<Props> = ({ children, icon, onClick }) => {
    return (
        <DropdownStyledItem onClick={onClick}>
            {icon}
            {children}
        </DropdownStyledItem>
    )
}

export default DropDownItem
