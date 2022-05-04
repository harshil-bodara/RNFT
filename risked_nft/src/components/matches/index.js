import React, { Fragment, useEffect, useState } from "react";

import MatchFilter from "./filter";
import MatchList from "./matchlist";
import MatchSwiper from "./swiper";

import "../../assets/css/matches.css";
import csGo from "../../assets/images/matches/csGo.png";
import Fortnite from "../../assets/images/matches/Fortnite.png";
import callDuty from "../../assets/images/matches/callDuty.png";

const Matches = () => {

  const [matchLists,setMatchLists] = useState([]);
 
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
  },[]);

  return (
    <Fragment>
      <div className="spec-data-section">
        <MatchSwiper matchLists={matchLists}/>
        <div className="spec-game-data-section">
          <MatchFilter />
          <MatchList />
        </div>
      </div>
    </Fragment>
  );
};

export default Matches;
