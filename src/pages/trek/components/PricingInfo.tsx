import {
    Box,
    Paper,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customBoxItem: {
            backgroundColor: '#000000',
            color: "#ffffff"
        },
        gridItemCenter: {
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)"
        },
        customDarkBackground: {
            backgroundColor: theme.palette.grey.A200
        }
    }))

const CustomBoxItem = ({ content }: any) => (
    <Box>
        <Typography variant={"body1"} component={'div'}>
            {content}
        </Typography>
    </Box>
)

export default function PricingInfo() {
    const classes = useStyles();
    return (
        <Box
            px={2}
            py={5}
            // style={{ backgroundColor: '#1e1e1e' }}
            className={classes.customDarkBackground}
        >
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    lg={7}
                    xl={5}
                    className={classes.gridItemCenter}
                >
                    <Paper elevation={0}>
                        <Box pl={4} py={5}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} className={classes.customBoxItem}>
                                    <CustomBoxItem content={"Date available"} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomBoxItem content={"2021/11/1"} />
                                </Grid>
                                <Grid item xs={6} className={classes.customBoxItem}>
                                    <CustomBoxItem content={"Price"} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomBoxItem content={"$ 1500"} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Box>
    )
}