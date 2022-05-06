import React, { Fragment, useEffect, useState } from "react";

import MatchFilter from "./filter";
import MatchList from "./matchlist";
import MatchSwiper from "./swiper";
import FooterPagination from "../layout/footerPagination";
import Footer from "../layout/footer";

import "../../assets/css/matches.css";
import csGo from "../../assets/images/matches/csGo.png";
import Fortnite from "../../assets/images/matches/Fortnite.png";
import callDuty from "../../assets/images/matches/callDuty.png";

const Matches = () => {

  const [matchLists,setMatchLists] = useState([]);
  const [matches,setMatches] = useState([]);
 
  useEffect(() => {
    const _matchlists = [
      {
        id: 1,
        img: csGo,
        title: "CS:GO",
        detail: "All regions, Staked, De_dust2"
      },
      {
        id: 2,
        img: Fortnite,
        title: "Fortnite",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 3,
        img: callDuty,
        title: "Call of Duty",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 4,
        img: csGo,
        title: "CS:GO",
        detail: "All regions, Staked, De_dust2"
      },
      {
        id: 5,
        img: Fortnite,
        title: "Fortnite",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 6,
        img: callDuty,
        title: "Call of Duty",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 7,
        img: csGo,
        title: "CS:GO",
        detail: "All regions, Staked, De_dust2"
      },
      {
        id: 8,
        img: Fortnite,
        title: "Fortnite",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 9,
        img: callDuty,
        title: "Call of Duty",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 10,
        img: csGo,
        title: "CS:GO",
        detail: "All regions, Staked, De_dust2"
      },
      {
        id: 11,
        img: Fortnite,
        title: "Fortnite",
        detail: "RU, Staked, De_dust2"
      },
      {
        id: 12,
        img: callDuty,
        title: "Call of Duty",
        detail: "RU, Staked, De_dust2"
      }
    ]
    setMatchLists(_matchlists)

    const _matches =[
      {
        img:csGo,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"Staked match",
        prize:"$RNFT 2,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:callDuty,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"UnStaked match",
        prize:"$RNFT 2,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 500"
      },
      {
        img:Fortnite,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"UnStaked match",
        prize:"$RNFT 10,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:csGo,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"Staked match",
        prize:"$RNFT 2,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:csGo,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"Staked match",
        prize:"$RNFT 2,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:callDuty,
        title:"de_dust2",
        time:"06:00 PM, 23 FEB",
        titleLabel:"UnStaked match",
        prize:"$RNFT 10,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:Fortnite,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"UnStaked match",
        prize:"$RNFT 10,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      },
      {
        img:csGo,
        title:"de_dust2",
        time:"11:00 AM, 16 APR",
        titleLabel:"Staked match",
        prize:"$RNFT 2,023",
        players:"12 / 18",
        type:"2x2",
        fee:"$RNFT 50"
      }
    ]
    setMatches(_matches);
  },[]);

  return (
    <Fragment>
      <div className="spec-data-section">
        <MatchSwiper matchLists={matchLists}/>
        <div className="spec-game-data-section match-spec-game-sect">
          <MatchFilter />
          <MatchList matches={matches}/>
          <div className="match-footer-pagination w-100">
            <FooterPagination/>
            <Footer/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Matches;
