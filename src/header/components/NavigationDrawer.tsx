import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from '../style';
import DrawerData from './DrawerDataComponent';
import { useState } from 'react';


interface Props {
    isDrawerOpen: boolean;
    handleDrawerToggle: any;
    drawerTransitionMiliSecond: number;
}

/*
    TODO: Change const drawer to acordion for nested nav
    when number of pages are fixed
*/



export default function NavigationDrawer(props: Props) {
    const {
        isDrawerOpen,
        handleDrawerToggle,
        drawerTransitionMiliSecond } = props;
    const classes = useStyles();

    const [state, setState] = useState(null);

    const handleOnClose = () => {
        setState(null);
        handleDrawerToggle();
    }



    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    variant="temporary"
                    anchor={"left"}
                    open={isDrawerOpen}
                    onClose={handleOnClose}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    transitionDuration={drawerTransitionMiliSecond}
                >
                    <DrawerData
                        classes={classes}
                        handleDrawerToggle={handleOnClose}
                        state={state}
                        setState={setState}
                    />
                </Drawer>
            </nav>

        </div>
    );
}
