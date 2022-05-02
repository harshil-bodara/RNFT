import React, { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import IMG_LOGO_CO from "../../assets/images/icons/logo-callofduty.svg";
import IMG_LOGO_CS from "../../assets/images/icons/logo-cs.svg";
import IMG_LOGO_FT from "../../assets/images/icons/logo-fortunite.svg";

import IMG_SCULL_ICO from "../../assets/images/icons/scull.svg";
import IMG_AWARD_ICO from "../../assets/images/icons/award.svg";

const RESOURCE_URL = "resources/images/";

const ProfileGameCards = () => {
  return (
    <Fragment>
      <div className="profile-games-section">
        <div className="profile-game-card ft-game-card">
          <img
            src={RESOURCE_URL + "profile/profile-ft.png"}
            className="profile-game-card-bg"
          />
          <div className="logo-section">
            <img src={IMG_LOGO_FT} alt="icon" />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_SCULL_ICO} alt="icon" />
                <span>Kill&nbsp;/&nbsp;Death</span>
              </div>
              <div className="progress-result">
                <span>15&nbsp;/&nbsp;43</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_AWARD_ICO} alt="icon" />
                <span>Win&nbsp;/&nbsp;Lose</span>
              </div>
              <div className="progress-result">
                <span>93&nbsp;%</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="profile-game-detail">
            <span>Unbeaten streak</span>
            <span>23</span>
            <span>Alive streak</span>
            <span>12</span>
          </div>
        </div>
        <div className="profile-game-card co-game-card">
          <img
            src={RESOURCE_URL + "profile/profile-co.png"}
            className="profile-game-card-bg"
          />
          <div className="logo-section">
            <img src={IMG_LOGO_CO} alt="icon" />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_SCULL_ICO} alt="icon" />
                <span>Kill&nbsp;/&nbsp;Death</span>
              </div>
              <div className="progress-result">
                <span>15&nbsp;/&nbsp;43</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_AWARD_ICO} alt="icon" />
                <span>Win&nbsp;/&nbsp;Lose</span>
              </div>
              <div className="progress-result">
                <span>93&nbsp;%</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="profile-game-detail">
            <span>Unbeaten streak</span>
            <span>23</span>
            <span>Alive streak</span>
            <span>12</span>
          </div>
        </div>
        <div className="profile-game-card cs-game-card">
          <img
            src={RESOURCE_URL + "profile/profile-cs.png"}
            className="profile-game-card-bg"
          />
          <div className="logo-section">
            <img src={IMG_LOGO_CS} alt="icon" />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_SCULL_ICO} alt="icon" />
                <span>Kill&nbsp;/&nbsp;Death</span>
              </div>
              <div className="progress-result">
                <span>15&nbsp;/&nbsp;43</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="progress-section">
            <div className="progress-data">
              <div className="progress-label">
                <img src={IMG_AWARD_ICO} alt="icon" />
                <span>Win&nbsp;/&nbsp;Lose</span>
              </div>
              <div className="progress-result">
                <span>93&nbsp;%</span>
              </div>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="profile-game-detail">
            <span>Unbeaten streak</span>
            <span>23</span>
            <span>Alive streak</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileGameCards;
