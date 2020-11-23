import styled, { keyframes } from 'styled-components';
import { AppTheme } from '../../styles/types';

const move = keyframes`
  from {    
    transform: translateY(-150%);
    opacity: 0;
  }

  to {    
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Background = styled.div<{ show: boolean }>`
    display: ${({ show }) => show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    transition: 0.1s;
    opacity: ${({ show }) => show ? 1 : 0};
    background-color: #00000066;

    justify-content: center;
    align-items: center;
`;

export const Fallback = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const Container = styled.section<{ theme: AppTheme }>`
    transform: translateY(-150%);
    min-width: 400px;
    min-height: 300px;
    opacity: 0;
    background-color: ${({ theme }) => theme.background};
    transition: 0.1s;
    box-shadow: 0 0px 10px ${({ theme }) => theme.type === 'light' ? '#777' : '#111'};   
    position: absolute;
    animation-iteration-count: 1;
    animation: ${move} 0.25s linear;
    animation-fill-mode: forwards;
    z-index: 99999999;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
`;