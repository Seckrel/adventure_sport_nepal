import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DropDownList from './DropDownComponent';
import { useState } from 'react';
import { AboutUs, Expeditions } from './MenuItems';
import { Fragment } from 'react';
import Box from '@material-ui/core/Box';;

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
    const [isOpen, setIsOpen] = useState(false);
    const [expand, setExpand] = useState([]);

    const handleMouseEnter = (props: any) => {
        setIsOpen(true)
        setExpand(props)
        console.log("point 1", props)
    }
    const handleMouseLeave = () => {
        setIsOpen(false)
        setExpand([])
    }

    return (
        <Fragment>
            <Box onMouseLeave={() => handleMouseLeave()}>
                <List className={classes.root}>
                    <ListItem
                        button
                        className={classes.hoverTransition}
                        onMouseEnter={() => handleMouseLeave()}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <CustomListItemText text="HOME" classes={classes} />
                    </ListItem>
                    <ListItem
                        button
                        className={classes.hoverTransition}
                        onMouseEnter={() => handleMouseEnter(Expeditions)}
                    //onMouseLeave={() => handleMouseLeave()}
                    >
                        <CustomListItemText text="EXPEDITIONS" classes={classes} />
                    </ListItem>
                    <ListItem
                        button
                        className={classes.hoverTransition}
                        onMouseEnter={() => handleMouseEnter(AboutUs)}
                    //onMouseLeave={() => handleMouseLeave()}
                    >
                        <CustomListItemText text="ABOUT US" classes={classes} />
                    </ListItem>
                    <ListItem
                        button
                        className={classes.hoverTransition}
                        onMouseEnter={() => handleMouseLeave()}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <CustomListItemText text="FAQ" classes={classes} />
                    </ListItem>
                    <ListItem
                        button
                        className={classes.hoverTransition}
                        onMouseEnter={() => handleMouseLeave()}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <CustomListItemText text="ENQUIRE" classes={classes} />
                    </ListItem>
                </List>
                {isOpen === true && expand
                    ? (
                        <DropDownList items={expand} />
                    ) : null}
            </Box>
        </Fragment>
    );
}