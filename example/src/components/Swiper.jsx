import React, { Component } from 'react'
import { Navigation, Pagination  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export class Swiper1 extends Component {
    render() {
        return (
            <div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div style={{ width: '300px', height: '300px', backgroundColor: 'red' }}>
                            <h2>salam</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div style={{ width: '300px', height: '300px', backgroundColor: 'red' }}>
                        <h2>salam</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '300px', height: '300px', backgroundColor: 'red' }}>
                            <h2>salam</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '300px', height: '300px', backgroundColor: 'red' }}>
                            <h2>salam</h2>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        )
    }
}

export default Swiper1