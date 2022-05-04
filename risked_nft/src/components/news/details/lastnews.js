import React, { Fragment } from "react";

import MobilelastnewsDetail from "./MobilelastnewsDetail";

import socialBg from "../../../assets/images/news/socialBg.png";
import Shape from "../../../assets/images/news/Shape.png";

const LastNews = ({ recommendedLists, mostReadLists}) => {

    return (
        <Fragment>
            <div className="row w-100 m-0 social-media-wrapper">
                <div className="col-md-7 social-wrap">
                    <div className="ms-2 pe-4">
                        <div className="social-media-section">
                            <img src={socialBg} alt="socialBg" className="w-100 mb-2"/>
                            <h3 className="mb-3 mt-4">Social medias</h3>
                            <p className="mb-4 mt-2">A Las Vegas man accused of holding a woman hostage, murdering her 4-year-old son and keeping his remains in the garage freezer will
                            remain behind bars for at least a month.
                            A judge has ordered Brandon Toseland to be held without bail until his next court appearance in
                            early $RNFTil and new charges of felony child abuse and neglect were added Monday on top of the existing charges of open murder
                            and kidnapping.</p>
                            <p className="mb-4 mt-2">Toseland, 35, was arrested last week after the 7-year-old daughter of his alleged victim handed a pile of sticky notes to her elementary
                            school teacher from her mother, claiming she was being held hostage and hadn’t seen her 4-year-old son, Mason Dominguez, in months.</p>
                            <p className="mb-4 mt-2">The note, allegedly scribbled over time while the mother, who has not been publicly identified, was handcuffed inside Toseland’s car, led
                            police to Toseland, who they arrested as he left the house on Feb. 22. Handcuffs were found in the car, as was the woman’s cell phone,
                            which she claimed he confiscated from her.</p>
                        </div>
                        <div className="mobile-recommend-sect">
                            <MobilelastnewsDetail/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 recommended-wrap">
                    <div className="recommended-sect ps-4">
                        <h3 className="mb-3">Recommended on Arcader</h3>
                        <div className="row">
                        {recommendedLists.map((index,i)=>{
                            return(    
                                <div className="col-12 headline-main" key={i}>
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
                        <h3 className="mb-3 mt-2">Most read</h3>
                        {mostReadLists.map((index,i)=>{
                            return(    
                            <div className="col-12 headline-main" key={i}>
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
            </div>
        </Fragment>
    )
}

export default LastNews;