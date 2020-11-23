import styled, { keyframes } from 'styled-components';
import { AppTheme } from '../../styles/types';

const move = keyframes`
  from {    
    right: -300px;
  }

  to {    
    right: 0;
  }
`;

export const Background = styled.div<{ show: boolean }>`
    display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    transition: 0.1s;
    opacity: ${({ show }) => show ? 1 : 0};
    background-color: #00000066;
`;

export const Fallback = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const ContainerAside = styled.aside<{ theme: AppTheme }>`
    width: 400px;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    position: absolute;
    top: 0;
    right: -300px;    
    transition: 0.3s;
    box-shadow: 0 0px 10px ${({ theme }) => theme.type === 'light' ? '#777' : '#111'};   
    animation-iteration-count: 1;
    animation: ${move} 0.2s linear;
    animation-fill-mode: forwards;
    z-index: 99999999;
    padding-left: 10px;
    padding-right: 10px;
`;