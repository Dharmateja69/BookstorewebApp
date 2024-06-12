import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import List from "../../public/List.json";
import Cards from "./Cards";

const Freebook = () => {
    const filterdata = List.filter((data) => data.category === "Free");

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='ax-w-screen-2xl container mx-auto md:px-20 px-4'>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
            <div className="">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus aliquid eum sed maiores voluptate a, quibusdam blanditiis impedit molestiae rerum consequatur possimus ad ipsa sequi sapiente veritatis corrupti sunt!
                </p>
            </div>

            <div className="">
                <Slider {...settings}>
                    {filterdata.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Freebook;
