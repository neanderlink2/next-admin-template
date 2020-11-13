import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
import { useThemeToggle } from '../../../components/ThemeToggleProvider';
import { TogglerButton } from './styles';


const ThemeToggle: React.FC = () => {
    const { scheme, toggleColorSchema } = useThemeToggle();
    return (
        <TogglerButton onClick={toggleColorSchema}>
            {scheme === 'light' && <BiMoon size={24} />}
            {scheme === 'dark' && <BiSun size={24} />}
        </TogglerButton>
    )
}

export default ThemeToggle
