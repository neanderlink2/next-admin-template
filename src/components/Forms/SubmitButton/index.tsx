import React, { ButtonHTMLAttributes } from 'react'
import { Button } from '../../Button';
import { LoadingIcon } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    fullWidth?: boolean;
};

const SubmitButton: React.FC<Props> = ({ children, loading, ...rest }) => {
    return (
        <Button {...rest} disabled={rest.disabled || loading}>
            {loading && <LoadingIcon />} 
            {children}
        </Button>
    )
}

export default SubmitButton
