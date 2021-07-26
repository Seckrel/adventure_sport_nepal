import {
    Box,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@material-ui/core';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        accordionDetails: {
            backgroundColor: theme.palette.grey.A200,
            color: theme.palette.primary.contrastText,
            borderRadius: "4px",
        }
    }))

export default function ItineraryInfo({ itineraryInfo }: any) {
    const [expanded, setExpanded] = useState<string | false>(false);
    const classes = useStyles();
    const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            px={1}
            boxShadow={0}
            id={"itineraryInfo"}
        >
            {itineraryInfo.map((item: any, idx: number) => (
                <Accordion
                    expanded={expanded === `panel${idx}`}
                    onChange={handleChange(`panel${idx}`)}
                    elevation={0}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${idx}bh-content`}
                        id={`panel${idx}bh-header`}
                    >
                        <Typography variant="h5" component={"div"}>
                            Day {item.start} {
                                item.start === item.end
                                    ? null : (" - " + item.end)
                            }
                        </Typography>
                    </AccordionSummary>
                    <Box boxShadow={5}>
                        <AccordionDetails
                            className={classes.accordionDetails}
                        >
                            <Typography variant={"body1"} component={'div'}>
                                {item.detail}
                            </Typography>
                        </AccordionDetails>
                    </Box>
                </Accordion>
            ))
            }
        </Box >
    );
}