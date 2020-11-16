import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeToggle } from '../../../components/ThemeToggleProvider'
import light from '../../../styles/light.theme';
import dark from '../../../styles/dark.theme';

const ScreenContainer: React.FC = ({ children }) => {
    const { scheme } = useThemeToggle();
    return (
        <ThemeProvider theme={scheme === 'light' ? light : dark}>            
            {children}
        </ThemeProvider>
    )
}

export default ScreenContainer
