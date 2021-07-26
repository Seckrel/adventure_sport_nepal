import {
    Box,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import green from '@material-ui/core/colors/green';
import { useState, Fragment } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        includeIcon: {
            color: green[700]
        },
        excludeIcon: {
            color: theme.palette.secondary.main
        },
        customDarkBackground: {
            backgroundColor: theme.palette.grey.A200,
            color: theme.palette.primary.contrastText
        }
    }))

const PackageInclusionAccordion = ({ packageInclusion, classes, expanded, handleChange }: any) => {
    return (
        <Fragment>
            {
                packageInclusion.map((packageDetails: any, packageIdx: number) => (
                    <Accordion
                        expanded={expanded === `panel${packageIdx}`}
                        onChange={handleChange(`panel${packageIdx}`)}
                        elevation={0}
                        key={packageIdx}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${packageIdx}bh-content`}
                            id={`panel${packageIdx}bh-header`}
                        >
                            <Typography variant="h5" component={"div"}>{packageDetails.inclusionType}</Typography>
                        </AccordionSummary>
                        <Box boxShadow={5}>
                            <AccordionDetails
                                className={"classes.accordionDetails"}
                            >
                                <List>
                                    {packageDetails.details.map((detail: string, idx: number) => (
                                        <ListItem key={idx}>
                                            <ListItemIcon>
                                                {packageIdx === 0
                                                    ? (<CheckIcon className={classes.includeIcon} />)
                                                    : (<ClearTwoToneIcon className={classes.excludeIcon} />)
                                                }
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={detail}
                                                primaryTypographyProps={{
                                                    variant: "body1",
                                                    component: "div"
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Box>
                    </Accordion>
                ))
            }
        </Fragment>
    )
}

export default function PackageInclusion ({ packageInclusion }: any) {
    const [expanded, setExpanded] = useState<string | false>(false);
    const classes = useStyles();
    const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box
            px={1}
            boxShadow={0}
            py={4}
            id={"packageInclusion"}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} className={classes.customDarkBackground}>
                    <Box my={5}>
                        <Typography
                            variant={'h4'}
                            component={'div'}
                        >
                            What is Included in the Package?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <PackageInclusionAccordion
                        classes={classes}
                        expanded={expanded}
                        packageInclusion={packageInclusion}
                        handleChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box >
    )
}