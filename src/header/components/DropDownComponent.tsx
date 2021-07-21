import Popover from '@material-ui/core/Popover';
import { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function DropDownList(props: any) {
    return (
        <Fragment>
            <List component="nav" aria-label="main mailbox folders"
                style={{
                    position: "absolute",
                    display: "block",
                    float: "left"
                }}>
                <ListItem button>

                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>

                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
        </Fragment>
    )
}