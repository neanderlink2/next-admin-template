import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
import { IconButton } from '../../../components/Button';
import { useThemeToggle } from '../../../components/ThemeToggleProvider';

const ThemeToggle: React.FC = () => {
    const { scheme, toggleColorSchema } = useThemeToggle();
    return (
        <IconButton onClick={toggleColorSchema} style={{ marginRight: 10 }}>
            {scheme === 'light' && <BiMoon />}
            {scheme === 'dark' && <BiSun />}
        </IconButton>
    )
}

export default ThemeToggle
