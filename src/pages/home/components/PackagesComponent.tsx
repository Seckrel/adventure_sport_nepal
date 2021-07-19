import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Paper,
    Box,
    IconButton,
    Grid
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Fragment } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
     Navigation
} from 'swiper/core';
import './styles.scss';

// install Swiper modules
SwiperCore.use([Navigation]);
const PackagesData = [
    {
        type: "Location",
        packages: [
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                name: "Mt. Everset",
                index: 1
            },
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 2,
                name: "Manaslu"
            },
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 3,
                name: "Lhotse"
            }
        ]
    },
    {
        type: "Combo",
        packages: [
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 4,
                name: "2 Mt Combo"
            },
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 5,
                name: "Ski + trek combo"
            }
        ]
    },
    {
        height: "Height",
        packages: [
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 6,
                name: "8000 m"
            },
            {
                imgSrc: "assets/images/mt_everset_640.jpg",
                index: 7,
                name: "6000 m"
            }
        ]
    }
]

const CreateSwiper = () => (
    <Swiper
        slidesPerView={2}
        spaceBetween={50}
        pagination={{
            "clickable": true
        }}
        navigation
        grabCursor
    >
        {PackagesData.map((packageItem: any, packageIdx: number) => (
            <Fragment>
                {
                    packageItem.packages.map((item: any, idx: number) => (
                        <SwiperSlide key={idx}>
                            {idx === 0 ? (<Typography variant={"h5"} component={"div"}>{packageItem.type}</Typography>) : null}
                            <Paper elevation={5}>
                                <Card className={""} >
                                    <CardMedia
                                        className={"img-fluid"}
                                        image={item.imgSrc}
                                        title="Contemplative Reptile"
                                        style={{ height: "200px" }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </SwiperSlide>

                    ))
                }
            </Fragment>
        ))}

    </Swiper>
)



export default function Packages() {

    return (
        <Box p={4}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CreateSwiper />
                </Grid>
                <Grid item xs={6}>
                    <IconButton >
                        <ArrowForwardIosIcon
                            fontSize="large"
                            style={{ rotate: '180deg' }}
                        />
                    </IconButton>
                    <IconButton >
                        <ArrowForwardIosIcon fontSize="large"
                        />
                    </IconButton>

                </Grid>
            </Grid>
        </Box>
    )
}