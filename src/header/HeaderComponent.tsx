import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Fade,
    useScrollTrigger,
    Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, cloneElement, Fragment, useEffect } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import { useStyles } from './style';
import { useTheme } from '@material-ui/core/styles';
import DestopNavigation from './components/DestopNavigation';


interface Props {
    children: React.ReactElement;
    trigger: Boolean;
}


function ElevationScroll(props: Props) {
    const { children, trigger } = props;

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}



export default function Header() {
    const fadeTransitionMiliSecond = 350;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const classes = useStyles(trigger);

    const theme = useTheme();
    const handleDrawerToggle = (): void => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const reponsiveness = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", () => reponsiveness())
    }, [])

    return (
        <Fragment>
            <ElevationScroll trigger={trigger}>
                <AppBar className={classes.appBar}>
                    <Toolbar variant="regular" component={"nav"}>
                        <Typography variant="h4" color="inherit">
                            Adventure
                        </Typography>

                        <Box ml="auto">
                            {innerWidth >= theme.breakpoints.values.md
                                ? (
                                    <DestopNavigation />
                                ) : (
                                    <Fragment>
                                        <Fade
                                            in={!isDrawerOpen}
                                            timeout={fadeTransitionMiliSecond}
                                        >
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                // className={classes.menuButton}
                                                onClick={handleDrawerToggle}
                                            >
                                                <MenuIcon fontSize={"large"} />
                                            </IconButton>
                                        </Fade>
                                    </Fragment>)
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <NavigationDrawer
                isDrawerOpen={isDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                drawerTransitionMiliSecond={fadeTransitionMiliSecond}
            />
        </Fragment>
    )
}