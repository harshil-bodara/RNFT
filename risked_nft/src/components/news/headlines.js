import React, { Fragment } from "react";

import Shape from "../../assets/images/news/Shape.png";

const Headlines = ({ headlines }) => {

    return(
        <Fragment>
            <div className="headline-section"> 
                <h2>Headlines</h2>
                <div className="row">
                    {headlines.map((index)=>{
                        return(    
                        <div className="col-xl-4 headline-main">
                            <div className="headline-box mb-4">
                                <img src={index.img} alt="headline" className="headlineImg" />
                                <div className="head-content ms-3">
                                    <div className="word-label">
                                        <span>{index.label}</span>
                                        <span className="ms-2">{index.labelSec}</span>
                                    </div>
                                    <p className="word-title">{index.labelTitle}</p>
                                    <div className="time-sect mt-1">
                                        <span>{index.time}</span>
                                        <p className="mb-0"><img src={Shape} alt="shape" className="me-2"/>{index.timeCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
      </Fragment>
    )
}

export default Headlines;
