import { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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

export default function DropDownList(props: any) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [expand, setExpand] = useState([])

    const handleMouseEnter = (props: any) => {
        setIsOpen(true)
        setExpand(props)
    }
    const handleMouseLeave = () => {
        setIsOpen(false)
        setExpand([])
    }

    return (
        <Fragment>
            <Grid
                container
                style={{
                    minHeight: "300px"
                }}
                onMouseLeave={() => handleMouseLeave()}
            >
                <Grid item xs={4}>
                    <List
                        style={{
                            position: "absolute",
                            display: "block",
                            float: "left"
                        }}
                    >
                        {props.items.map((item: any) =>
                            item.items
                                ? (
                                    <ListItem
                                        button
                                        className={classes.hoverTransition}
                                        onMouseEnter={() => handleMouseEnter(item.items)}
                                    >
                                        <CustomListItemText text={item.name} classes={classes} />
                                    </ListItem>
                                ) : (
                                    <ListItem
                                        button
                                        className={classes.hoverTransition}
                                        onMouseEnter={() => handleMouseLeave()}
                                    >
                                        <CustomListItemText text={item.name} classes={classes} />
                                    </ListItem>
                                )
                        )}
                    </List>
                </Grid>

                {isOpen === true && expand
                    ? (
                        <Grid item xs={6}>
                            <DropDownList items={expand} />
                        </Grid>
                    ) : null}
            </Grid>
        </Fragment>
    )
}