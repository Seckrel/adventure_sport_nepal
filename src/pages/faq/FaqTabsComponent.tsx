import React, { useState, Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FaqObject } from './FaqObject';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const useFlexContainerStyle = makeStyles((theme: Theme) => ({
    flexContainer: {
        justifyContent: "center",
    },
}));

export default function FaqTabsComponent() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const flexContainerCenter = useFlexContainerStyle();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                    classes={flexContainerCenter}
                >
                    {FaqObject.map((item: any, idx: number) => (
                        <Tab label={item.label} key={idx} {...a11yProps(idx)} />
                    ))}
                </Tabs>
            </AppBar>
            {FaqObject.map((item: any, idx: number) => (
                <TabPanel value={value} key={idx} index={idx}>
                    {item.faqs.map((faq: any, index: number) => (
                        <Fragment key={index}>
                            <Typography variant="h6">Question: {faq.question}</Typography>
                            <Typography variant="subtitle1">Answer: {faq.answer}</Typography>
                        </Fragment>
                    ))}
                </TabPanel>
            ))}
        </div>
    );
}
