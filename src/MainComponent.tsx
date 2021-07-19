import {
    createTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import { useMemo } from 'react';
import Header from './header/HeaderComponent';
import Body from './BodyComponent';


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
                'sans- serif'`,
                h1: {
                    fontFamily: `"Playfair Display", serif`
                },
                h2: {
                    fontFamily: `"Playfair Display", serif`
                },
                h3: {
                    fontFamily: `"Playfair Display", serif`
                },
                h4: {
                    fontFamily: `"Playfair Display", serif`
                }
            }
        }), []
    );

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Body />
        </ThemeProvider>
    )
}