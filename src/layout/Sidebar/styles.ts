import styled, { css, keyframes } from 'styled-components';
import { AppTheme } from '../../styles/types';

const move = keyframes`
  from {    
    left: -300px;
  }

  to {    
    left: 0;
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

export const ContainerSidebar = styled.nav<{ theme: AppTheme }>`
    width: 300px;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    position: absolute;
    top: 0;
    left: -300px;    
    transition: 0.3s;
    box-shadow: 0 0px 10px ${({ theme }) => theme.type === 'light' ? '#777' : '#111'};   
    animation-iteration-count: 1;
    animation: ${move} 0.2s linear;
    animation-fill-mode: forwards;
    z-index: 99999999;
`;


export const Navegacao = styled.ul<{ theme: AppTheme }>`
    height: 100%;
    width: 100%;
    margin: 0;    
    padding: 10px 0px;
    list-style-type: none;
    transition: background 0.3s ease;    
    text-align: left;    
`;

export const ItemNavegacao = styled.li<{ header?: boolean, theme: AppTheme }>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    border-bottom: 1px solid ${({ theme }) => theme.textColor}22;

    & a {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 100%;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        color: ${({ theme }) => theme.textColor};
    }

    & a svg {
        margin-left: 25px;
        margin-right: 10px;
    }

    &:hover {
        cursor: pointer;
        background: #ffffff55;
    }

    ${({ header }) => header && css`
        margin-bottom: 50px;
        color: ${({ theme }) => theme.textColor};
        flex-direction: column;

        & svg {
            background: ${({ theme }) => theme.background};
            padding: 15px;
            border-radius: 50%;
        }

        &:hover {
            cursor: pointer;
            background: #ffffff55;
        }
    `}    
`;