import { DefaultTheme } from "styled-components";

export interface AppTheme extends DefaultTheme {
    type: 'dark' | 'light';
    background: string;
    main: string;
    secondary: string;
    textColor: string;
    typography: string;
};