import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() =>
    createStyles({
        menuButton: {
            marginLeft: "auto"
        }
    }))


export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense" component={"nav"}>
                <Typography variant="h5" color="inherit">
                    Adventure
                </Typography>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}