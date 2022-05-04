import React, { Fragment, useEffect, useState } from "react";

import MatchFilter from "./filter";
import MatchList from "./matchlist";
import MatchSwiper from "./swiper";

const Speculators = () => {
 
  return (
    <Fragment>
      <div className="spec-data-section">
        <MatchSwiper />
        <div className="spec-game-data-section">
          <MatchFilter />
          <MatchList />
        </div>
      </div>
    </Fragment>
  );
};

export default Speculators;
