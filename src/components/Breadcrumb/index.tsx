import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { NoActionLabel, StyledLink } from './styles'

type Props = {
    icon?: React.ReactNode;
    href?: string;
    disabled?: boolean;
    title: string;
}

const Breadcrumb: React.FC<Props> = ({ icon, title, href, disabled }) => {
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {icon}
            {disabled && (
                <NoActionLabel>{title}</NoActionLabel>
            )}
            {!disabled && (
                <StyledLink href={href ?? ''}>
                    {title}
                </StyledLink>
            )}
            {!disabled && <BiChevronRight />}
        </span>
    )
}

export default Breadcrumb
