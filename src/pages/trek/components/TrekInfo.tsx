import {
    Box,
    IconButton,
    Grid,
    Typography
} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typographyBody: {
            height: "inherit",
            width: "100%"
        },
        overflowContainer: {
            heigth: readMoreState => readMoreState ? "auto" : "250px",
            transition: "max-height 0.15s ease-out",
        },
        fadeIn: {
            position: "relative",
            maxHeight: readMoreState => readMoreState ? "100%" : "250px",
            overflow: readMoreState => readMoreState ? "visible" : "hidden",
            padding: "10px",
            transition: "max-height 0.15s ease-out",
        },
        backgroundFade: {
            position: "absolute",
            bottom: 0,
            right: 0,
            display: readMoreState => readMoreState ? "none" : "block",
            width: "100%",
            height: "60px",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "40px",
            backgroundImage: `linear-gradient(rgba(30,30,30,0),${theme.palette.grey.A200})`,
            transform: "translateY(-9em)",
            zIndex: 1,
            [theme.breakpoints.up(1920)]: {
                transform: "translateY(-14em)"
            },
            [theme.breakpoints.up(3840)]: {
                transform: "translateY(-19em)"
            }

        },
        background: {
            backgroundColor: theme.palette.grey.A200,
            color: "white",
            position: "relative"

        },
        // icon
    }))

export default function TrekInfo() {
    const [readMoreState, setReadMoreState] = useState(false)
    const classes = useStyles(readMoreState);
    return (
        <div>
            <Box p={5} className={classes.background}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant={'h4'} component={'div'}>
                            What Adventure Includes?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box className={classes.overflowContainer} >
                            <Typography
                                variant={'body1'}
                                component={'div'}
                                className={clsx(classes.typographyBody, classes.fadeIn)}
                            >
                                <p>
                                    It’s easy to understand why trekking to Everest Base Camp is a bucket list item for many.
                                    One of the most adventurous, tough, but rewarding hikes in the world, this trail offers phenomenal
                                    mountain views, and incredible insights into the lives of Sherpas and others in Khumbu Region. And who
                                    better to show you all this than Sherpas themselves?
                                </p>
                                <p>
                                    Elite Exped is an entirely Nepalese-run, with our record-breaking directors Nimsdai, Mingma David Sherpa,
                                    and Mingma Tenzi priding themselves on their ability to bridge the gap between western and Himalayan climbing cultures,
                                    offering the best of both worlds. Our leader's mountaineering record is unparalleled. In 2021, they were famously part
                                    of the first team ever to summit K2 in winter, and in 2019 Nimsdai shattered the speed record for climbing all 14 of the
                                    world’s 8,000ers as part of his Project Possible push while Mingma David became the youngest person to climb them.
                                    Their safety record is also second to none, and the handpicked guiding team they have assembled to lead Elite Exped’s
                                    trips and treks are all trained in the latest high altitude rescue and recovery techniques.&nbsp;<br />
                                </p>
                            </Typography>
                        </Box>
                    </Grid>
                    {readMoreState ? null
                        : (
                            <Grid
                                container
                                item
                                xs={12}
                                justifyContent="center"
                            >
                                <IconButton onClick={() => setReadMoreState(true)}>
                                    <ControlPointIcon htmlColor={"white"} fontSize={"large"} />
                                </IconButton>
                            </Grid>
                        )
                    }
                </Grid>
                <span className={classes.backgroundFade} />
            </Box>
        </div>
    );
}