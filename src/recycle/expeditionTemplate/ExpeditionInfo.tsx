import {
    Box,
    IconButton,
    Grid,
    Typography
} from '@material-ui/core';
import { useState, Fragment } from 'react';
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

export default function ExpeditionInfo({ expeditionInfo }: any) {
    const [readMoreState, setReadMoreState] = useState(false)
    const classes = useStyles(readMoreState);
    return (
        <Fragment>
            <Box
                p={5}
                className={classes.background}
                id={"expeditionInfo"}
            >
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant={'h4'} component={'div'}>
                            {expeditionInfo.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box className={classes.overflowContainer} >
                            <Typography
                                variant={'body1'}
                                component={'div'}
                                className={clsx(classes.typographyBody, classes.fadeIn)}
                            >
                                {expeditionInfo.paragraphs.map((paragraph: any, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
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
        </Fragment>
    );
}