import React, { Fragment, useEffect, useState } from "react";

import FilterTap from "../items/filtertap";
import SelectOption from "../inputs/filterselect";
import SortOption from "../inputs/sortoption";
import ToggleInput from "../inputs/toggleinput";
import MobileFilter from "./mobileFilter";

import IMG_FILTER_CS from "../../assets/images/icons/filter-cs-ico.svg";
import IMG_FILTER_CO from "../../assets/images/icons/filter-co-ico.svg";
import IMG_FILTER_FT from "../../assets/images/icons/filter-ft-ico.svg";
import closeIcon from "../../assets/images/icons/RemoveIcon.svg";
import Search from "../../assets/images/icons/Search.svg";

const MatchFilter = () => {
  const [gameOption, setGameoption] = useState([]);
  const [placeOption, setPlaceoption] = useState([]);
  const [sortOption, setSortoption] = useState([]);

  useEffect(() => {
    const _gameOptions = ["All types", "1x1", "2x2", "3x3", "TxT"];
    setGameoption(_gameOptions);
    const _placeOptions = ["de_dust2", "1000$", "2000$", "5000$"];
    setPlaceoption(_placeOptions);
    const _sortOptions = ["Time", "Entrance Fee", "Prize"];
    setSortoption(_sortOptions);
  }, []);


  return (
    <Fragment>
      <div className="match-filter-section">
        <div className="spec-filter-section">
          <div className="filter-tab-header pe-3 pt-2">
            <div className="filter-tap-section">
              <FilterTap filtername={"All games"} />
              <FilterTap filtername={"CS:GO"} filtericon={IMG_FILTER_CS} />
              <FilterTap filtername={"Call of Duty"} filtericon={IMG_FILTER_CO} />
              <FilterTap filtername={"Fortnite"} filtericon={IMG_FILTER_FT} />
            </div>
            <div className="clear-section">
                <p className="mb-0">Clear all<img src={closeIcon} alt="close" className="ms-2" /></p>                                                                                                                                                                                                                                                                                                                                                                                                                             
            </div>
          </div>
          <div className="filter-hr-line"></div>
          <div className="filter-tab-contents">
            <div className="filter-search-section">
              <div className="row">
                <div className="col-6 col-xxl-4">
                  <div className="search-main">
                    <input type="text" placeholder="Search server" />
                    <img className="search-icon" src={Search} alt="Search" />
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-xxl-2">
                  <div className="sub-select">
                    <SelectOption options={gameOption} />
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-xxl-2">
                  <div className="sub-select">
                    <SelectOption options={gameOption} />
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-xxl-2">
                  <div className="sub-select">
                    <SelectOption options={placeOption} />
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-xxl-2">
                  <div className="random-select">
                    <button>Random match</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-switch-sect">
              <div className="switch-sect">
                <div className="toggle-sect">
                  <ToggleInput />
                  <label>Have slot for player</label>
                </div>
                <div className="toggle-sect">
                  <ToggleInput />
                  <label>Only staked matches</label>
                </div>
                <div className="toggle-sect">
                  <ToggleInput />
                  <label>Only Premium</label>
                </div>
              </div>
              <div className="sub-select">
                <span>Sort by</span>
                <SortOption options={sortOption} />
              </div>
            </div>
          </div>
        </div>
        <MobileFilter/>
      </div>
    </Fragment>
  );
};

export default MatchFilter;
