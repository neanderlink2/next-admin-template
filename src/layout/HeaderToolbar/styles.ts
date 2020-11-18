import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  display: inline;
`;

export const UserName = styled.span`
    opacity: 1;
    cursor: pointer;
    transition: 0.3s;
    display: flex; 
    align-items: center;

    &:hover {
        opacity: 0.6
    }
`;
