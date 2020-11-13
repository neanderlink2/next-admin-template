import styled from 'styled-components';
import { AppTheme } from '../../../styles/types';

export const TogglerButton = styled.div<{ theme: AppTheme }>`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 25px;
    display: flex;
    padding: 10px;
    border-radius: 50%;
    &:hover {
        background-color: ${({ theme }) => theme.textColor}33;
    }
`;
