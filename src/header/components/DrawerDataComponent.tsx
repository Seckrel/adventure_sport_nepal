import {
    Box,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { Fragment } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const TitleBox = (props: any) => {
    return (
        <Fragment>
            <Box
                className={props.classes.toolbar}
                display={"flex"}
                justifyContent={"flex-end"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"flex-end"}
                >
                    <Box p={1}>
                        {props.init
                            ? (
                                <IconButton
                                    onClick={props.handleDrawerToggle}
                                >
                                    <CloseIcon
                                        fontSize="large"
                                    />
                                </IconButton>
                            ) : (
                                <Typography
                                    variant={"h5"}
                                    component={"div"}
                                >
                                    {props.title}
                                </Typography>
                            )}
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Fragment>
    )
}

const InitialNavList = ({
    handleNavClick,
    expendition,
    aboutUs,
    classes,
    handleDrawerToggle, init }: any) => (
    <Fragment>
        <TitleBox
            classes={classes}
            handleDrawerToggle={handleDrawerToggle}
            init={init}
            title={null}
        />
        <ListItem
            button
        >
            <ListItemText primary={"HOME"} />
        </ListItem>
        <ListItem
            button
            onClick={() => handleNavClick(expendition)}
        >
            <ListItemText primary={"EXPENDITION"} />
            <ArrowForwardIosIcon />
        </ListItem>
        <ListItem
            button
            onClick={() => handleNavClick(aboutUs)}
        >
            <ListItemText primary={"ABOUT US"} />
            <ArrowForwardIosIcon />
        </ListItem>
        <ListItem
            button
        >
            <ListItemText primary={"FAQ"} />
        </ListItem>
        <ListItem
            button
        >
            <ListItemText primary={"ENQUIRE"} />
        </ListItem>
    </Fragment>
)

const NavList = ({
    classes,
    init,
    state,
    handleNavClick }: any) => {
    const handleClick = (item: any) => {
        if (item.items.length === 0) {
            console.log("printing");
            return;
        }
        handleNavClick(item);
    }
    return (
        <Fragment>
            <TitleBox
                classes={classes}
                init={init}
                title={state.name}
                handleNavClick={handleNavClick}
            />
            {state.items.map((item: any, idx: number) => (
                <ListItem
                    button
                    key={idx}
                    onClick={() => handleClick(item)}
                >
                    <ListItemText primary={item.name.toUpperCase()} />
                    {item.items.length > 0 && <ArrowForwardIosIcon />}
                </ListItem>
            ))}
        </Fragment>
    )
}

const Expendition = {
    name: "Expendition",
    prev: null,
    items: [
        {
            name: "Combo",
            items: [],
            href: ''
        },
        {
            name: "Ski",
            items: [
                {
                    name: "Ski in Puthan Hinchuli (7426m)",
                    href: '',
                    items: []
                },
                {
                    name: "Ski in  Mera Peak (6654m)",
                    href: '',
                    items: []
                },
                {
                    name: "Ski in Bhrikuti Peak (6361m)",
                    href: '',
                    items: []
                },
                {
                    name: "Ski in Ramdung Go Peak (5925m)",
                    href: '',
                    items: []
                },
                {
                    name: "Ski in Kalinchowk (3842m)",
                    href: '',
                    items: []
                }
            ]
        },
        {
            name: "mountainering",
            items: [
                {
                    name: "Chulu West Peak Climbing (6419m)",
                    items: []
                },
                {
                    name: "Island Peak Climbing (6189m)",
                    items: []
                },
                {
                    name: "Manaslu Peak Climbing (8163m)",
                    items: []
                },
                {
                    name: "Mera Peak Peak Climbing (6461m)",
                    items: []
                },
                {
                    name: "Yala Peak Climbing (5520m)",
                    items: []
                },
            ]
        },
        {
            name: "Trekking",
            items: [
                {
                    name: "Annapurna Circuit Trek",
                    items: []
                },
                {
                    name: "Dhaulagiri Circuit Trek",
                    items: []
                },
                {
                    name: "Everest Circuit Trek",
                    items: []
                },
                {
                    name: "Guerilla Circuit Trek",
                    items: []
                },
                {
                    name: "Manaslu Circuit Trek",
                    items: []
                },
            ]
        }
    ]
};

const AboutUs = {
    name: "About Us",
    prev: null,
    items: [
        {
            name: "Our Team",
            href: '',
            items: []
        },
        {
            name: "Saftey",
            href: '',
            items: []
        },
    ]
};


export default function DrawerData(props: any) {
    const { classes, handleDrawerToggle } = props;

    const state = props.state;

    const setState = props.setState;

    const handleNavClick = (nav: any) => {
        setState(nav);
    }

    return (
        <div>
            <List>
                {state === null
                    ? (<InitialNavList
                        handleNavClick={handleNavClick}
                        expendition={Expendition}
                        aboutUs={AboutUs}
                        classes={classes}
                        handleDrawerToggle={handleDrawerToggle}
                        init={state === null}
                    />)
                    : (
                        <NavList
                            classes={classes}
                            init={state === null}
                            state={state}
                            handleNavClick={handleNavClick}
                        />
                    )
                }
            </List>
        </div>
    );

};