import {
    createTheme,
    ThemeProvider,
    useTheme
} from "@material-ui/core/styles";
import Grey from '@material-ui/core/colors/grey';
import { useMemo } from 'react';
import Header from './header/HeaderComponent';


// declare module '@material-ui/core/styles/createTheme' {
//     interface Palette {
//         palette: {
//             type: string;
//             primary: string;
//         };
//     }
//     interface PaletteOptions {
//         palette?: {
//             type?: string;
//             primary?: string;
//         };
//     }
//     interface Typography {
//         typography: {
//             fontFamily: string;
//         }
//     }
//     interface TypographyOptions {
//         typography: {
//             fontFamily?: string
//         }
//     }
// }


export default function Main() {
    const defaultTheme = useTheme();
    const theme = useMemo(
        () => createTheme({
            palette: {
                type: 'dark',
                primary: {
                    main: "#424242",
                    light: "#6d6d6d",
                    dark: "#1b1b1b"
                },
                secondary: {
                    main: "#fafafa",
                    light: "#ffffff",
                    dark: "#c7c7c7"
                }
            },
            typography: {
                fontFamily: `'Chivo', '- apple - system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                'sans- serif'`
            }
        }), []
    );

    return (
        <ThemeProvider theme={theme}>

            <Header />

        </ThemeProvider>
    )
}