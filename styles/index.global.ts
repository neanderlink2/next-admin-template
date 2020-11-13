
import { createGlobalStyle } from "styled-components";
import { AppTheme } from "./types";

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
    body, html {
        margin: 0;
        padding: 0;
        transition: all 0.3s ease;
    }

    body {        
        transition: all 0.3s ease;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        font-family: ${({ theme }) => theme.typography};
    }
`;