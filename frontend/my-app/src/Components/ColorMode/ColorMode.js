import {useEffect, useState} from 'react';
import {
    useColorMode, 
    useColorModeValue,
    Button, 
    IconButton, 
    IconButtonProps
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorMode = () => {
    const [theme, setTheme] = useState('');
    const { colorMode, toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const handleChange = () => {
    }

    return (
        <IconButton
        size='md'
        fontSize='lg'
        variant='ghost'
        color='current'
        marginLeft='2'
        onClick={handleChange}
        icon={SwitchIcon()}
        aria-Label={`Switch to ${text} mode`}
        />
    );
  }

export default ColorMode;