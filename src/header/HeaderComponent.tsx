import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Fade,
    useScrollTrigger,
    Slide
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, cloneElement, Fragment } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import { useStyles } from './style';

interface Props {
    children: React.ReactElement;
    trigger: Boolean;
}


function ElevationScroll(props: Props) {
    const { children, trigger } = props;

    // console.log(trigger);

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}



export default function Header() {
    const fadeTransitionMiliSecond = 350;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const classes = useStyles(trigger);

    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 0,
    // });
    const handleDrawerToggle = (): void => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <Fragment>
            <ElevationScroll trigger={trigger}>
                <AppBar className={classes.appBar}>
                    <Toolbar variant="regular" component={"nav"}>
                        <Typography variant="h5" color="inherit">
                            Adventure
                        </Typography>
                        <Fade
                            in={!isDrawerOpen}
                            timeout={fadeTransitionMiliSecond}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={classes.menuButton}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon fontSize={"large"} />
                            </IconButton>
                        </Fade>
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