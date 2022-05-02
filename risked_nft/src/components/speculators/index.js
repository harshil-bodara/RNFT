import React, { Fragment, useEffect, useState } from "react";

import SpecFilter from "./filter";
import GamesTable from "../games/gamestable";
import KycVerify from "./kycverify";
import MobileFilter from "./mofilter";

import "../../assets/css/speculator.css";

const Speculators = () => {
  const [liveGameData, setLiveGameData] = useState([]);
  const [gameData, setGameData] = useState([]);

  const [modalShow, setModalShow] = useState(true);
  const [filterShow, setFilterShow] = useState(false);

  useEffect(() => {
    const _tempLivegames = [
      {
        gameName: "CS",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer01.png"],
        gamePlayerAvatarB: ["gameplayer02.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: true,
      },
      {
        gameName: "CS",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer01.png"],
        gamePlayerAvatarB: ["gameplayer02.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: true,
      },
    ];
    setLiveGameData(_tempLivegames);

    const _tempGames = [
      {
        gameName: "CS",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer05.png"],
        gamePlayerAvatarB: ["gameplayer06.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "CO",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer07.png"],
        gamePlayerAvatarB: ["gameplayer08.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "CS",
        gameType: "TxT",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer09.png"],
        gamePlayerAvatarB: ["gameplayer10.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "FT",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer11.png"],
        gamePlayerAvatarB: ["gameplayer12.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "CS",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer05.png"],
        gamePlayerAvatarB: ["gameplayer06.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "CO",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer07.png"],
        gamePlayerAvatarB: ["gameplayer08.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "CS",
        gameType: "TxT",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer09.png"],
        gamePlayerAvatarB: ["gameplayer10.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
      {
        gameName: "FT",
        gameType: "1x1",
        gamePlayerNamesA: ["Brooklyn Simmons"],
        gamePlayerNamesB: ["Eleanor Pena"],
        gamePlayerAvatarA: ["gameplayer11.png"],
        gamePlayerAvatarB: ["gameplayer12.png"],
        timesLeft: "23:41",
        betAmout: "2.1x",
        isLive: false,
      },
    ];
    setGameData(_tempGames);

    console.log("--------------")
  }, []);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleFilter = (flag) => {
    setFilterShow(flag);
  };

  return (
    <Fragment>
      <KycVerify modalShow={modalShow} handleClose={handleClose} />
      <MobileFilter show={filterShow} onHandleFilter={handleFilter} />
      <div className="spec-data-section">
        <SpecFilter onHandleFilter={handleFilter} />
        <div className="spec-game-data-section">
          <GamesTable title="Live" data={liveGameData} />
          <GamesTable title="Tomorrow" data={gameData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Speculators;
