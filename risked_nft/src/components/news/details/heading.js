import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import back from "../../../assets/images/icons/back.svg";
import facebook from "../../../assets/images/icons/facebook.svg";
import insta from "../../../assets/images/icons/insta.svg";
import send from "../../../assets/images/icons/send.svg";
import Shape from "../../../assets/images/news/Shape.png";

const NewsDetails = () => {

    return(
        <Fragment>
            <div className="news-detail-section"> 
                <div className="detail-header">
                    <Link to="/news"><span className="back-title"><img className="me-3" src={back} alt="back"/>Back to news</span></Link>
                    <div className="word-label mt-4">
                        <span>CS:go</span>
                        <span className="ms-2">World</span>
                        <span className="ms-2">Peoples</span>
                    </div>
                    <h4 className="my-4">No bail for Las Vegas man accused of murdering 4-year-old boy found in freezer</h4>
                    <div className="social-sect">
                        <div className="time-sect">
                            <span>23:00, 16 APR</span>
                            <p className="mb-0 ms-3"><img src={Shape} alt="shape" className="me-2"/>23</p>
                        </div>
                        <div>
                            <img src={facebook} alt="back"/>
                            <img src={insta} alt="back" className="mx-4"/>
                            <img src={send} alt="back"/>
                        </div>
                    </div>
                </div>
            </div>
      </Fragment> 
    )
}

export default NewsDetails;