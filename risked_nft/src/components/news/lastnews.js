import React, { Fragment } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Shape from "../../assets/images/news/Shape.png";

const LastNews = ({ lastNews }) => {

    return (
        <Fragment>
            <div className="news-section">
                <h2>Last news</h2>
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            1440: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            1799: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                          }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true, 
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {lastNews.map((index,i)=>{
                            return(
                            <SwiperSlide className="swiper-slide-wrap" key={i}>
                                <div className="swiper-content">
                                    <div className="swiper-card-detail"> 
                                        <p className="card-titles">{index.title}</p>
                                        <h6>{index.detail}</h6>
                                        <div className="timing-main">
                                            <div className="timing-detail">
                                                <span>{index.label}</span>
                                                <span className="ms-2">{index.labelSec}</span>
                                            </div>
                                            <div className="time-sect">
                                                <span>{index.time}</span>
                                                <p className="mb-0 ms-3"><img src={Shape} alt="shape" className="me-2"/>{index.timeCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </Fragment>
    )
}

export default LastNews;
