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

export default function HookInfoText({ hookInfo }: any) {
    const classes = useStyles();

    return (
        <Box
            px={{ xs: 5, md: 8, lg: 20, xl: 30 }}
            py={{ xs: 5, md: 8, lg: 15 }}
            className={classes.boxRoot}
            id={"hookInfo"}
        >
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography
                        variant={'h4'}
                        component={'div'}
                        className={classes.typography}
                    >
                        <span>{hookInfo.title}</span><br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant={'body1'}
                        component={'p'}
                        className={classes.typography}
                    >
                       {hookInfo.text}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}