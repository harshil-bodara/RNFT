import React, { Fragment, useEffect, useState } from "react";

import Headlines from "./headlines";
import Lastnews from "./lastnews";

import "../../assets/css/news.css";
import Mobilelastnews from "./mobilelastnews";
import Headline from "../../assets/images/news/headline.png";
import Headline1 from "../../assets/images/news/headline1.png";
import Headline2 from "../../assets/images/news/headline2.png";
import Headline3 from "../../assets/images/news/headline3.png";
import Headline4 from "../../assets/images/news/headline4.png";
import Headline5 from "../../assets/images/news/headline5.png";

const News = () => {
    
    const [headlines,setHeadlines] = useState([]);
    const [lastNews,setLastNews] = useState([]);

    useEffect(() => {

        const _headlines=[
            {
                img:Headline,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                img:Headline1,
                label:"Arcader",
                labelSec:"World",
                labelTitle:"Joe Rogan mocked after chair",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                img:Headline2,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                img:Headline3,
                label:"Fornite",
                labelSec:"World",
                labelTitle:"Derek Jeter is no longer part",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                img:Headline4,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 APR",
                timeCount:"23"
            }, {
                img:Headline5,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 APR",
                timeCount:"23"
            }
        ]
        setHeadlines(_headlines)

        const _lastnews = [
            {
                title:"Harlem drug kingpin Alpo Martinez was shot dead",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                title:"Derek Jeter is no longer part of the Marlins organization",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                title:"Man fatally shoots his 3 kids, then himself inside Sacramento church",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                title:"Driver, passenger killed after speeding BMW veers off Henry...",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            },
            {
                title:"Harlem drug kingpin Alpo Martinez was shot dead",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            }, 
            {
                title:"Harlem drug kingpin Alpo Martinez was shot dead",
                detail:"Create a password with at least 6 characters. Only Latin letters, numbers and general...",
                label:"CS:go",
                labelSec:"World",
                time:"23:00, 16 APR",
                timeCount:"23"
            }
        ]
        setLastNews(_lastnews)
    },[]);

    return(
        <Fragment>
        <div className="news-data-section">
          <div className="news-game-data-section">
            <Headlines headlines={headlines}/>
            <div className="last-news-main">
                <Lastnews lastNews={lastNews}/>
            </div>
            <div className="mobile-last-news">
                <Mobilelastnews lastNews={lastNews}/>
            </div>
          </div>
        </div>
      </Fragment>
    )
}

export default News;
