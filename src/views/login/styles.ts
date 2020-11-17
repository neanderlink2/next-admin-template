import styled from 'styled-components';
import { AppTheme } from '../../styles/types';
import { manusearCor } from '../../utils/colorUtils';

export const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoginCard = styled.div<{ theme: AppTheme }>`
    background-color: ${({ theme }) => manusearCor(theme.background, -2)};    
    padding: 25px 20px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.textColor}66;
`;