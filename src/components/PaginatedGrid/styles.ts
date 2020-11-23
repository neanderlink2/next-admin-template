import styled from 'styled-components';
import { manusearCor } from '../../utils/colorUtils';

export const GridContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const PageCounting = styled.span`
    color: ${({ theme }) => manusearCor(theme.textColor, theme.type === 'light' ? 30 : -30)};
    font-size: 11px;
`;

export const BorderlessSelect = styled.select<{}>`
    border: none;
    background-color: transparent;
    padding-right: 10px;

    color: ${({ theme }) => manusearCor(theme.textColor, theme.type === 'light' ? 30 : -30)}
`;