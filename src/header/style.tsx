import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            backgroundImage: "url('/assets/images/grain-white-1200-opac18.png')",
            backgroundSize: "300px auto",
            // backgroundColor: "transparent",

        },
        menuButton: {
            marginLeft: "auto"
        },
        appBar: {
            backgroundColor: trigger => trigger ? "black" : "transparent",
        }
    }),
);
