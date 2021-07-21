import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const cardItems = [
    {
        image: "https://support-leagueoflegends.riotgames.com/hc/article_attachments/4402984319251/Sentinel_Riven.png",
        title: "Contemplative Reptile"
    }, {
        image: "https://support-leagueoflegends.riotgames.com/hc/article_attachments/4402984319251/Sentinel_Riven.png",
        title: "Contemplative Reptile"
    },
    {
        image: "https://support-leagueoflegends.riotgames.com/hc/article_attachments/4402984319251/Sentinel_Riven.png",
        title: "Contemplative Reptile"
    }
]

const CreateMediaCards = (props: any) => {
    const classes = useStyles();
    const { cardItems } = props;

    return (
        <Fragment>
            {cardItems.map((cardItem: any) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={cardItem.image}
                                    title={cardItem.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {cardItem.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <Paper elevation={0}>
                                        <Typography variant="subtitle1">Learn more
                                        </Typography>
                                    </Paper>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Fragment>

    )
}

export default function AdventureMediaCard() {
    const classes = useStyles();

    return (
        <Fragment>
            <Box p={2}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    <CreateMediaCards cardItems={cardItems} />
                </Grid>
            </Box>
        </Fragment>
    );
}