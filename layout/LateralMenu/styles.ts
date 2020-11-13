import styled, { css } from 'styled-components';
import { AppTheme } from '../../styles/types';

export const Navegacao = styled.ul<{theme: AppTheme}>`
    height: 100%;
    width: 75px;
    margin: 0;    
    padding: 10px 0px;
    list-style-type: none;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #F28963, #ED906E);
    text-align: center;    
`;

export const ItemNavegacao = styled.li<{ header?: boolean, theme: AppTheme }>`
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    padding-top: 15px;
    padding-bottom: 15px;    

    &:hover {
        cursor: pointer;
        background: #ffffff22;
    }

    ${({ header }) => header && css`
        margin-bottom: 50px;
        color: ${({ theme }) => theme.textColor};

        & svg {
            background: ${({ theme }) => theme.background};
            padding: 15px;
            border-radius: 50%;
        }
    `}    
`;