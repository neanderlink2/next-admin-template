import { BiLoaderCircle } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const LoadingIcon = styled(BiLoaderCircle)`
    margin-right: 10px;
    animation: ${rotate} 2s linear infinite;
`;