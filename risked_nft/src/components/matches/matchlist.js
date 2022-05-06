import React, { Fragment } from "react";

import csGo from "../../assets/images/matches/csGo.png";
import callDuty from "../../assets/images/matches/callDuty.png";
import Fortnite from "../../assets/images/matches/Fortnite.png";
import nextArrow from "../../assets/images/matches/nextArrow.png";
import matchBg from "../../assets/images/matches/matchBg.png";

const MatchlistData =[
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

const MatchList = ({ matches }) => {
  return (
    <Fragment>
       <div className="matchlist-main">
          <div className="row">
            {
              matches.map((index,key)=>{
                return(
                  <div className="col-md-3 matchcard-list">
                    <div className="matchlist-card mb-4">
                      <img src={matchBg} alt="match" className="matchlist-bg"/>
                      <div className="match-icon">
                        <span>Live</span>
                        <img src={index.img} alt="match" className="ms-auto"/>
                      </div>
                      <p className="text-center">{index.title}</p>
                      <h1 className="text-center">{index.time}</h1>
                      <div className="text-center mt-2">
                        <label className="unstacked">{index.titleLabel}</label>
                      </div>
                      <div className="match-detail">
                        <div className="match-prize">
                          <h6>{index.prize}</h6>
                          <p className="mb-0">Match prize</p>
                        </div>
                        <div className="match-prize">
                          <h6>{index.players}</h6>
                          <p className="mb-0">Players</p>
                        </div>
                        <div className="match-prize">
                          <h6>{index.type}</h6>
                          <p className="mb-0">Type</p>
                        </div>
                      </div>
                      <div className="fee-detail">
                          <h2 className="mb-0"><span>Entrance fee:</span>{index.fee}</h2>
                          <button>More <img src={nextArrow} alt="next" className="ms-2" /></button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
       </div>
    </Fragment>
  );
};

export default MatchList;
