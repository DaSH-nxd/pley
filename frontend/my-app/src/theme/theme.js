import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({

    config,
    colors: {
        darkblue: "#37447E",
        lightblue: "#114180",
        yellow: "#FFB133",
        darkyellow: "#F39600",
        turquoise: "#158582",
        teal: "#00C6C2",
        turtle: "#324B4A",
        lightred: "#E8403D"
    }, 
});

export default theme;