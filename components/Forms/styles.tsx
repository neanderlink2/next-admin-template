import { Form } from '@unform/web';
import styled from 'styled-components';
import { AppTheme } from '../../styles/types';

export const ErrorLabel = styled.span`
    color: #D0342A;
    font-size: 11px;
`;

export const Formulario = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const BasicInput = styled.input<{ theme: AppTheme }>`
    border: 1px solid ${({ theme }) => theme.textColor};
    border-radius: 7px;
    padding:7px 8px;
    transition: 0.1s;
    background: transparent;
    color: ${({ theme }) => theme.textColor};
    filter: brightness(1);

    &:focus {
        border: 1px solid ${({ theme }) => theme.main};
    }    
`;

export const InputGroup = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    width: fill-available;

    & label {
        font-size: 12px;
    }
`;