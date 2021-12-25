import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            primary: '#EFEFEF',
            secondary: '#37374A'
        },
        text: {
            primary: '#8383AE',
            secondary: '#040466',
        }
    },
    typography: {
        fontSize: 20,
    },
    spacing: 4,

});

export default function MainTheme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
