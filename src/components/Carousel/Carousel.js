import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Spinner } from '@chakra-ui/react';
function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const height = `500px`
    const images = [
        {
            id: 1,
            url: "https://www.xtrafondos.com/wallpapers/cancha-de-golf-1302.jpg",
            name: "Estadio Golf"
        },
        {
            id: 2,
            url: "https://images7.alphacoders.com/426/thumb-1920-426529.jpg",
            name: "Estadio Futbol"
        }
    ]

    if (images) {
        return (
            <Slider {...settings}>
                {images.map((e) =>
                    <Image
                        width='100%'
                        height={height}
                        src={e.url}
                        alt={e.name} />
                )}
            </Slider>
        )
    } else {
        return <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    }
}

export default Carousel
