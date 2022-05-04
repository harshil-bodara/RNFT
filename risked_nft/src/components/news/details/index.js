import React, { Fragment } from "react";

import Newsdetail from "./newsdetail";
import Lastnews from "./lastnews";
import MobileLastNews from "./mobilelastnews";

import "../../../assets/css/news.css";

const News = () => {
    
    return(
        <Fragment>
        <div className="news-data-section">
          <div className="news-game-data-section">
            <Newsdetail/>
            <div className="last-news-main">
                <Lastnews/>
            </div>
            <div className="mobile-last-news">
                <MobileLastNews/>
            </div>
          </div>
        </div>
      </Fragment>
    )
}

export default News;
