'use client';
import SliderCard from "./sliderCard";
import sliderStyle from "./sliderCard.module.css";
import Wrapper from "@/app/layouts/wrapper/wrapper";
import sliderImage from "../../images/slider/slider.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPage() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows : false,
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    const sliderDemo = [
        { image: sliderImage, heading: "Markets", description: "Budget 2024: Sitharaman Prioritizes" },
        { image: sliderImage, heading: "News", description: "Budget 2024: Sitharaman Prioritizes Infrastructure" },
        { image: sliderImage, heading: "Finance", description: "Budget 2024:  Infrastructure" },
        { image: sliderImage, heading: "News", description: "Budget 2024: Sitharaman Prioritizes Infrastructure" },
        { image: sliderImage, heading: "Finance", description: "Budget 2024: Sitharaman Prioritizes Infrastructure" },
    ];

    return (
        <section className={sliderStyle.sliderContainer}>
            <div className={sliderStyle.mainContainer}>
                <Wrapper>
                    <Slider {...settings}>
                        {sliderDemo.map((item, index) => (
                            <SliderCard
                                key={index}
                                image={item.image}
                                heading={item.heading}
                                description={item.description}
                            />
                        ))}
                    </Slider>
                </Wrapper>
            </div>
        </section>
    );
}
 