import {
    Box,
    Typography,
    Grid
} from '@material-ui/core';
import { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customDarkBackground: {
            backgroundColor: theme.palette.grey.A200,
            color: theme.palette.primary.contrastText
        }
    }))

const InfoContent = () => {
    return (
        <Fragment>
            <Typography variant={'body2'} component={"div"} paragraph>
                In case the client decides to cancel their trip, at any time between booking and the time of the trip,
                some deduction will be made to the advance amount. This is due to the company’s obligation to pay a certain
                amount for personnel and resources while booking them.
            </Typography>
            <Typography variant={'body2'} component={"div"} paragraph>
                The following cancellations charges will apply if you decide to cancel the booking:
            </Typography>
            <Typography variant={'body2'} component={"div"} paragraph>
                NB: All refund requests must be made in writing and be received in our office within the notice period stated above.
            </Typography>
            <Typography variant={'body2'} component={"div"} paragraph>
                For all cancellations, the company must be notified in writing. Acceptable means of communication include letter and email.
            </Typography>
        </Fragment>
    )
}

export default function CancellationDetails() {
    const classes = useStyles();
    return (
        <Box
            px={2}
            py={5}
            className={classes.customDarkBackground}
            id={"cancellationDetails"}
        >
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box my={5}>
                        <Typography
                            variant={'h4'}
                            component={'div'}
                        >
                            Cancellation Details
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <InfoContent />
                </Grid>
            </Grid>

        </Box>
    );
}