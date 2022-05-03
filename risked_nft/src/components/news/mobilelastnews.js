import React, { Fragment } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Shape from "../../assets/images/news/Shape.png";

const Mobilelastnews = ({ lastNews }) => {

    return (
        <Fragment>
            <div className="news-section">
                <h2>Last news</h2>
                {lastNews.map((index)=>{
                    return(
                        <div className="swiper-slide-wrap">
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
                        </div>
                    )})}
                    <div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mobilelastnews;
