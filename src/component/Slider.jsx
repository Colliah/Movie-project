import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
const Slider = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper"
                pagination={{
                    clickable: true,
                }}
                speed={600}
                parallax={true}

            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                />
                <SwiperSlide>
                    <img src="https://image.congan.com.vn/thumbnail/CATP-480-2021-11-15/anh-tin-phim.jpeg" className=' w-full h-[600px] bg-center bg-no-repeat bg-cover ' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://tvhub.com.vn/wp-content/uploads/2016/11/THUMBNAIL-MTDCT_1587366390-580x360.png" className=' w-full h-[600px] bg-center bg-no-repeat bg-cover ' alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Slider