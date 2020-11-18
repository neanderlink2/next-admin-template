import styled, { css } from 'styled-components';
import { AppTheme } from '../../../styles/types';

export const BorderlessInput = styled.input<{ theme: AppTheme }>`
    border: none;
    background: transparent;
    outline: none !important;
    padding-right: 8px;
    padding-left: 8px;  
    color: ${({ theme }) => theme.textColor};
    flex: 1;
`;

export const InputFake = styled.div<{ theme: AppTheme, focused?: boolean; }>`
    display: inline-flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.textColor};
    transition: 0.2s;    
    filter: brightness(1);
    border-radius: 7px;
    cursor: text;

    ${({ focused }) => (
        focused && css`
            border: 1px solid ${({ theme }) => theme.main};
        `
    )}

    & svg {
        color: ${({ theme }) => theme.textColor};
    }
`;