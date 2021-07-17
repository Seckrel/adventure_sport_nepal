import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { Box, IconButton } from '@material-ui/core';
import { useStyles } from '../style';


interface Props {
    isDrawerOpen: boolean;
    handleDrawerToggle: any;
    drawerTransitionMiliSecond: number;
}

export default function NavigationDrawer(props: Props) {
    const {
        isDrawerOpen,
        handleDrawerToggle,
        drawerTransitionMiliSecond } = props;
    const classes = useStyles();

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    textAlign={"center"}
                >
                    <Box p={1}>
                        <IconButton
                            onClick={handleDrawerToggle}
                        >
                            <CloseIcon
                                fontSize="large"
                            />
                        </IconButton>
                    </Box>
                </Box>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    variant="temporary"
                    anchor={"left"}
                    open={isDrawerOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    transitionDuration={drawerTransitionMiliSecond}
                >
                    {drawer}
                </Drawer>
            </nav>

        </div>
    );
}
