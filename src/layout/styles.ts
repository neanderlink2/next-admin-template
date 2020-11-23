import { Composition } from 'atomic-layout';
import Scrollbar from 'react-scrollbars-custom';
import styled from 'styled-components';
import { AppTheme } from '../styles/types';

export const Container = styled(Composition) <{ theme: AppTheme }>`
    background-color: ${({ theme }) => theme.background};
    flex: 1;
    width: 100vw;
    height: 100vh;
    transition: 0.3s;    
`;

export const MainScrollbar = styled(Scrollbar) <{ theme: AppTheme }>`
    max-height: 87vh !important;
    overflow-y: auto;
    margin-top: 15px;

    & .ScrollbarsCustom-TrackY {
        width: 7px !important;
        transition: background 0.2s ease;
        background-color: ${({ theme }) => theme.textColor}33 !important;
    }

    & .ScrollbarsCustom-ThumbY {
        transition: background 0.2s ease;
        background-color: ${({ theme }) => theme.textColor}77 !important;
    }
`;