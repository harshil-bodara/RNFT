import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import Shape from "../../assets/images/news/Shape.png";

const Mobilelastnews = ({ lastNews }) => {

    return (
        <Fragment>
            <div className="news-section">
                <h2>Last news</h2>
                {lastNews.map((item,i)=>{
                    return(
                        <Link to={`news/${item.id}`} key={i}>
                            <div className="swiper-slide-wrap">
                                <div className="swiper-content">
                                    <div className="swiper-card-detail"> 
                                        <p className="card-titles">{item.title}</p>
                                        <h6>{item.detail}</h6>
                                        <div className="timing-main">
                                            <div className="timing-detail">
                                                <span>{item.label}</span>
                                                <span className="ms-2">{item.labelSec}</span>
                                            </div>
                                            <div className="time-sect">
                                                <span>{item.time}</span>
                                                <p className="mb-0 ms-3"><img src={Shape} alt="shape" className="me-2"/>{item.timeCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )})}
                    <div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mobilelastnews;
