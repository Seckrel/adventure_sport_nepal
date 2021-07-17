import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Fade
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import { useStyles } from './style';


export default function Header() {
    const fadeTransitionMiliSecond = 350;
    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = (): void => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div>
            <AppBar position="static">
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
            <NavigationDrawer
                isDrawerOpen={isDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                drawerTransitionMiliSecond={fadeTransitionMiliSecond}
            />
        </div>
    )
}