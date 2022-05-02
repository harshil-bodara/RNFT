import React, { Fragment, useEffect, useState } from "react";

import CheckBox from "../inputs/checkbox";
import SelectOption from "../inputs/filterselect";

import IMG_CLEAR_ALL from "../../assets/images/icons/clear-all-ico.svg";

const MobileFilter = ({ show, onHandleFilter }) => {
  const [checkBoxData, setCheckBoxData] = useState([]);
  const [gameOption, setGameoption] = useState([]);
  const [placeOption, setPlaceoption] = useState([]);

  useEffect(() => {
    const _tempData = [
      {
        title: "All games",
        avatar: "",
        state: true,
      },
      {
        title: "CS:GO",
        avatar: "filter-cs-ico.svg",
        state: false,
      },
      {
        title: "Call of Duty",
        avatar: "filter-co-ico.svg",
        state: false,
      },
      {
        title: "Fortnite",
        avatar: "filter-ft-ico.svg",
        state: false,
      },
    ];
    setCheckBoxData(_tempData);

    const _gameOptions = ["All types", "1x1", "2x2", "3x3", "TxT"];
    setGameoption(_gameOptions);
    const _placeOptions = ["de_dust2", "1000$", "2000$", "5000$"];
    setPlaceoption(_placeOptions);
  }, []);

  const handleFilter = () => {
    onHandleFilter(false);
  };

  const handleCheckbox = (acive) => {
    const _tapItems = [];
    checkBoxData.map((item, index) => {
      item.state = index === acive;
      _tapItems.push(item);
      setCheckBoxData([..._tapItems]);
    });
  };

  return (
    <Fragment>
      {show ? (
        <div className="mobile-filter-section">
          <div className="filter-main">
            <div className="filter-main-header" onClick={handleFilter}>
              <div>
                {"<"}
                <span>&nbsp;Filter</span>
              </div>
            </div>
            <div className="black-filter-section"></div>
            <div className="game-filter-section">
              <div className="game-filter-header">Game</div>
              <div className="game-filter-check">
                {checkBoxData && checkBoxData.length > 0 ? (
                  checkBoxData.map((item, index) => {
                    return (
                      <CheckBox
                        key={index}
                        title={item.title}
                        avatar={item.avatar}
                        state={item.state}
                        setActive={() => handleCheckbox(index)}
                      />
                    );
                  })
                ) : (
                  <Fragment></Fragment>
                )}
              </div>
            </div>
            <div className="game-filter-section">
              <div className="game-filter-header">Other</div>
              <div className="game-filter-select">
                <SelectOption options={gameOption} />
                <SelectOption options={placeOption} />
              </div>
            </div>
          </div>

          <div className="filter-actions">
            <div className="clear-all-btn">
              <span>Clear all</span>
              <img src={IMG_CLEAR_ALL} al="ico" />
            </div>

            <div className="confirm-filter-btn">Confirm</div>
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default MobileFilter;
