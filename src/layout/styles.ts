import { Composition } from 'atomic-layout';
import styled from 'styled-components';
import { AppTheme } from '../styles/types';

export const Container = styled(Composition)<{ theme: AppTheme }>`
    background-color: ${({ theme }) => theme.background};
    flex: 1;
    width: 100vw;
    height: 100vh;
    transition: 0.3s;    
`;
