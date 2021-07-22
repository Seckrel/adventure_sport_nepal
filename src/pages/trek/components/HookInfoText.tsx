import {
    Grid,
    Box,
    Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        boxRoot: {
            backgroundColor: theme.palette.grey.A200,
        },
        typography: {
            color: "white"
        }
    }))

export default function HookInfoText() {
    const classes = useStyles();

    return (
        <Box
            px={{ xs: 5, md: 8, lg: 20, xl: 30 }}
            py={{ xs: 5, md: 8, lg: 15 }}
            className={classes.boxRoot}
        >
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography
                        variant={'h4'}
                        component={'div'}
                        className={classes.typography}
                    >
                        <span>Everest Trek</span><br />
                        <span>Camp trek</span><br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant={'body1'}
                        component={'p'}
                        className={classes.typography}
                    >
                        The trek to Everest Base Camp is the most famous multi-day adventure hike in the world for a reason.
                        Taking you into the heart of the Himalayas, the route winds its way up to 5,643m above sea level,
                        offering you unparalleled views of the world’s highest mountain. Along the way, you’ll be immersed in
                        Sherpa culture, soaking up the sounds and sights of the Khumbu region, and creating memories that will last a lifetime
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}