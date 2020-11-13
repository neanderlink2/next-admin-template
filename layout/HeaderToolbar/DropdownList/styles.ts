import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    margin-top: -16px;
    border-radius: 7px;

    ul {
        list-style: none;
        padding:0;
        min-width: 70px;
    }
`;

export const DropdownStyledItem = styled.li`
    cursor: pointer;
    font-size: 11px;
    padding: 10px 30px;
    color: white;

    &:hover {
        background-color: #ffffff44;
    }

    &:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    &:last-child {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }
`;