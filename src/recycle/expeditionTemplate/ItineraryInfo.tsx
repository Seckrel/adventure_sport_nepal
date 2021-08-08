import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import HotelIcon from '@material-ui/icons/Hotel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    boxStyle: {
        maxWidth: "700px",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
    }
}));

export default function ItineraryInfo({ itineraryInfo }: any) {
    const classes = useStyles();

    return (

        // Font size for mobile view needs to be worked on.
        <Box
            id={"itineraryInfo"}
            className={classes.boxStyle}
        >
            <Timeline align="alternate">
                {itineraryInfo.map((item: any, idx: number) => (
                    <TimelineItem key={idx}>
                        <TimelineSeparator>
                            <TimelineDot
                                variant="outlined"
                                color={
                                    idx % 2 === 0
                                        ? "primary" : "secondary"
                                }
                            >
                                <HotelIcon />
                            </TimelineDot>
                            {
                                idx === (itineraryInfo.length - 1)
                                    ? null : <TimelineConnector />
                            }
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Day {item.start} {
                                        item.start === item.end
                                            ? null : (" - " + item.end)
                                    }
                                </Typography>
                                <Typography>{item.detail}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
