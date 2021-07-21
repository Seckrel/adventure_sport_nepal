import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DropDownList from './DropDownComponent';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
        },

        listItem: {
            width: 'max-content',
            paddingTop: '10px'
        },

        hoverTransition: {
            "&:hover": {
                color: "black",
                backgroundColor: "rgba(255,255,255,0.3)"
            }
        }

    }),
);

interface CustomListItemTextProps {
    text: string;
    classes?: any;
}

const CustomListItemText = ({ text, classes }: CustomListItemTextProps) => {
    return (
        <ListItemText
            primary={text}
            className={classes.listItem}
            primaryTypographyProps={{
                variant: "h5",
            }} />
    )
}

export default function DesktopNavigation() {
    const classes = useStyles();
    const [drop, setDrop] = useState(null);

    const handleMouseEnter = (props: any) => {
        setDrop(props.name)
    }
    const handleMouseLeave = () => {
        setDrop(null)

        console.log("leave")
    }

    return (
        <List className={classes.root}>
            <ListItem
                button
                className={classes.hoverTransition}
            >
                <CustomListItemText text="HOME" classes={classes} />
            </ListItem>
            <ListItem
                button
                className={classes.hoverTransition}
                onMouseEnter={() => handleMouseEnter(AboutUs)}
                onMouseLeave={() => handleMouseLeave()}
            >
                <CustomListItemText text="EXPEDITION" classes={classes} />
            </ListItem>
            <ListItem
                button
                className={classes.hoverTransition}
                onMouseEnter={() => handleMouseEnter(AboutUs)}
                onMouseLeave={() => handleMouseLeave()}
            >
                <CustomListItemText text="ABOUT US" classes={classes} />
                {drop === "About Us"
                    ? (
                        <DropDownList list={AboutUs} />
                    ) : null}
            </ListItem>
            <ListItem
                button
                className={classes.hoverTransition}
            >
                <CustomListItemText text="FAQ" classes={classes} />
            </ListItem>
            <ListItem
                button
                className={classes.hoverTransition}
            >
                <CustomListItemText text="ENQUIRE" classes={classes} />
            </ListItem>
        </List>
    );
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