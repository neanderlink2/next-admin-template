
import { createGlobalStyle } from "styled-components";
import { AppTheme } from "./types";

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
    body, html {
        margin: 0;
        padding: 0;
    }

    body {        
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        font-family: ${({ theme }) => theme.typography};
    }
`;