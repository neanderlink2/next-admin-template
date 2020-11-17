
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
    input {
        outline: none !important;
    }

    h1 {
        margin: 0;
    }

    .Toastify__toast {
        border-radius: 7px;
        font-family: Poppins, sans-serif;
    }

    .Toastify__toast--info, .Toastify__close-button--info {
        background: #f9f9f9;
        color: #323232;
    }

    .Toastify__toast--dark, .Toastify__close-button--dark {
        background: #212121;
        color: #f0f0f0;
    }

    .Toastify__toast--error, .Toastify__close-button--error {
        background: #D0342A;
        color: #f0f0f0;
    }

    .Toastify__toast--warning, .Toastify__close-button--warning {
        background: #F5A537;
        color: white;
    }

    .react-datepicker__input-container {
        display: flex;
        flex: 1;
    }

    .react-datepicker__input-container input {
        flex: 1;
    }

    .react-select__control {
        background: transparent;
        font-size: 12px;
    }
`;