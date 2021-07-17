import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import NavigationDrawer from './components/NavigationDrawer';

const useStyles = makeStyles(() =>
    createStyles({
        menuButton: {
            marginLeft: "auto"
        }
    }))


export default function Header() {
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
                    {!isDrawerOpen
                        ? (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={classes.menuButton}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        ): null}
                </Toolbar>
            </AppBar>
            <NavigationDrawer
                isDrawerOpen={isDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
        </div>
    )
}