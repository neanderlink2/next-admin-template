import styled, { css } from 'styled-components';
import { AppTheme } from '../../styles/types';
import { manusearCor } from '../../utils/colorUtils';

export const Button = styled.button<{ theme: AppTheme, fullWidth?: boolean }>`
    border: none;
    padding: 10px 20px;    
    transition: 0.15s;
    cursor: pointer;
    outline: none !important;
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => manusearCor(theme.main, -35)};
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    border-radius: 7px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:enabled {
        background-color: ${({ theme }) => manusearCor(theme.main, 20)};
    }

    &:active:enabled {
        background-color: ${({ theme }) => manusearCor(theme.main, 30)};
    }

    &:disabled {
        background-color: #d2d2d2;
        color: #929292;
    }

    ${({fullWidth}) => (fullWidth && css`width: 100%;`)}
`;
