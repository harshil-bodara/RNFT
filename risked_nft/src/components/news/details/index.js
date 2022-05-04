import React, { Fragment, useEffect, useState  } from "react";

import Heading from "./heading";
import Lastnews from "./lastnews";

import "../../../assets/css/news.css";

import Headline from "../../../assets/images/news/headline.png";
import Headline3 from "../../../assets/images/news/headline3.png";

const News = () => {

    const [recommendedLists,setRecommendedLists] = useState([]);
    const [mostReadLists,setMostReadLists] = useState([]);

    useEffect(() => {
        const _recommendeds=[
            {
                id:1,
                img:Headline,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 $RNFT",
                timeCount:"23"
            },
            {
                id:2,
                img:Headline3,
                label:"Fornite",
                labelSec:"World",
                labelTitle:"Derek Jeter is no longer part",
                time:"23:00, 16 $RNFT",
                timeCount:"23"
            }
        ];
        setRecommendedLists(_recommendeds)

        const _mostReadLists=[
            {
                id:1,
                img:Headline,
                label:"CS:go",
                labelSec:"World",
                labelTitle:"Harlem drug kingpin Alpo Martinez was shot dead",
                time:"23:00, 16 $RNFT",
                timeCount:"23"
            },
            {
                id:2,
                img:Headline3,
                label:"Fornite",
                labelSec:"World",
                labelTitle:"Derek Jeter is no longer part",
                time:"23:00, 16 $RNFT",
                timeCount:"23"
            }
        ];
        setMostReadLists(_mostReadLists)
    },[])
    
    return(
        <Fragment>
        <div className="news-data-section">
          <div className="news-game-data-section">
            <Heading/>
            <div className="last-news-details-main">
                <Lastnews recommendedLists={recommendedLists} mostReadLists={mostReadLists}/>
            </div>
          </div>
        </div>
      </Fragment>
    )
}

export default News;
