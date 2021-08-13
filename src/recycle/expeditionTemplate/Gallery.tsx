import ReactBnbGallery from 'react-bnb-gallery';
import { useState, Fragment } from 'react';
import {
    Box,
    ImageList,
    ImageListItem
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            // justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            cursor: "url('assets/svg/gallery-zoom.svg') 25 25, pointer"
        },
        imageList: {
            flexGrow: 1,
            width: 500,
            height: 450,
        },
        imageListItem: {
            padding: '0px !important'
        }
    }),
);


export default function Gallery() {

    const PHOTOS = [{
        photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
        caption: "Viñales, Pinar del Río, Cuba",
        subcaption: "Photo by Simon Matzinger on Unsplash",
        col: 2,
        // thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
    }, {
        photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
        caption: "La Habana, Cuba",
        subcaption: "Photo by Gerardo Sanchez on Unsplash",
        col: 1,
        // thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
    }, {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        col: 1,
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        col: 2,
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    }, {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    },
    {
        photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
    }
    ];

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <Box
                className={classes.root}
                onClick={() => setIsOpen(true)}
            >
                {/* <button onClick={() => setIsOpen(true)}>
                Open gallery
            </button>
            <Box display={'block'} mb={20} pb={20}>
                
            </Box> */}
                <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                    {PHOTOS.map((item, idx) => (
                        <ImageListItem
                            key={idx}
                            cols={item.col || 1}
                            className={classes.imageListItem}
                        >
                            <img src={item.photo} className={'img-fluid'} alt={item.caption} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
                // showThumbnails
            />
        </Fragment>
    ) 
}
