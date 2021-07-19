import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function FullWidthGrid() {
    const info = `Founded on the unparalleled operational experience of record breaking mountaineers Nimsdai Purja MBE, 
    Mingma David Sherpa, and Mingma Tenzi Sherpa, Elite Exped will take you above and beyond breath-taking, high-altitude adventures.`

    return (
        <div>
            <Box p={2}>
                <Grid container spacing={2}>
                    <Hidden smDown>
                        <Grid item md={4}>
                            <Paper>{info}</Paper>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={8}>
                        <Paper>
                            <Typography variant="h6" component="div">
                                {info}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
