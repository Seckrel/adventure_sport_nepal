import { Box, Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MoreIcon from '@material-ui/icons/More';


const useStyles = makeStyles(() =>
    createStyles({
        img: {
            height: "100%",
            width: "100%"
        },
        box: {
            position: "relative"
        },
        overlappingDiv: {
            position: 'absolute',
            top: "50%",
            transform: "translateY(-50%)",
            width: "50%"
        },
        paper: {
            background: "transparent",
            padding: "8px"
        },
        typographyMainInfo: {
            fontWeight: 500
        },
        typographyLearnMore: {
            fontWeight: 700
        },
        moreIconSpan: {
            marginLeft: "8px"
        },
        icon: {
            rotate: "180deg",
            position: "relative",
            top: "calc(100% - 24px)"
        }
    })
);

export default function LandingShowCase() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Box className={clsx(classes.box, classes.img)}>
            <img
                srcSet={`./assets/images/bigshowcase_600.jpg ${theme.breakpoints.values.sm}w,\
                ./assets/images/bigshowcase_960.jpg ${theme.breakpoints.values.md}w,\
                ./assets/images/bigshowcase_1280.jpg ${theme.breakpoints.values.lg}w,\
                ./assets/images/bigshowcase_1920.jpg ${theme.breakpoints.values.xl}w,\
                `}
                alt={"showcase image of mountain"}
                className={clsx("img-fluid", classes.img)}
            />

            <Box px={2} className={classes.overlappingDiv}>
                <Paper elevation={20} className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                component="div"
                                className={classes.typographyMainInfo}
                            >
                                {`High-altitude adventure
                    sking & snowboarding
                    led by professionals`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h6"
                                component="span"
                                className={classes.typographyLearnMore}
                            >

                                Learn more
                                <span className={classes.moreIconSpan}>
                                    <MoreIcon
                                        fontSize={'medium'}
                                        color={'secondary'}
                                        className={classes.icon}
                                    />
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}