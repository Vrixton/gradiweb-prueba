import React from 'react';
import Carousel from "react-multi-carousel"
import CarouselItem from "@/app/components/carousel-item/carousel-item"
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
    breakpoint: {
        max: 3000,
        min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
    },
    mobile: {
    breakpoint: {
        max: 464,
        min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
    },
    tablet: {
    breakpoint: {
        max: 1024,
        min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
    }
}
const CarouselProducts = ({products}) => (
    <div className="cont-carousel">
        <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={true}
            className="products-carousel"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                { products?.map((product, i) => ( 
                    <CarouselItem key={i} product={product} />
                ) ) }
            </Carousel>
    </div>
)

export default CarouselProducts


