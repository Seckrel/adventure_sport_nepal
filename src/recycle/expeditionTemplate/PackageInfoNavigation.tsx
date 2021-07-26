import {
    Grid,
    Box,
    Paper,
    IconButton,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PanoramaIcon from '@material-ui/icons/Panorama';
import orange from '@material-ui/core/colors/orange';

const CustomIconButton = (props: any) => (
    <Box justifyContent={"center"} display={"flex"}>
        <Paper
            style={{ borderRadius: "100%" }}
        >
            <IconButton
                onClick={props.onClickMethod}
            >
                <props.Icon
                    fontSize="large"
                    htmlColor={props.accentColor}
                />
            </IconButton>
        </Paper>
    </Box>
)

const TabNavItem = () => {
    const accentColor = orange[800];

    return (
        <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#expeditionInfo"}
                    Icon={InfoIcon}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#pricingInfo"}
                    Icon={PanoramaIcon}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#pricingInfo"}
                    Icon={AttachMoneyIcon}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#itineraryInfo"}
                    Icon={TransferWithinAStationIcon}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#packageInclusion"}
                    Icon={CheckCircleOutlineIcon}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CustomIconButton
                    accentColor={accentColor}
                    onClickMethod={() => window.location.href="#cancellationDetails"}
                    Icon={HighlightOffIcon}
                />
            </Grid>
        </Grid>
    )
}

export default function PackageInfoNavigation() {
    return (
        <Box
            py={5}
            px={2}
        >
            <Paper elevation={5}>
                <Box py={5}>
                    <TabNavItem />
                </Box>
            </Paper>
        </Box>
    );
}