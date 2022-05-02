import React, { Fragment } from "react";

const RESOURCE_URL = "resources/images/";

const ProfileTableCard = ({ data }) => {
  return (
    <Fragment>
      <div className="profile-table-card-section">
        <div className={"profile-card-bg-" + data.gameType}></div>
        <div className="profile-table-logo-section">
          <div className={"profile-card-logo-" + data.gameType}></div>
          <span>{data.time + ", " + data.rnftAmount + "RNFT"}</span>
        </div>
        <div className="profile-table-player-section">
          <div className="player-section">
            <img
              src={RESOURCE_URL + "teams/" + data.gamePlayerAvatarA[0]}
              alt="game-player"
            />
            <span>{data.gamePlayerNamesA ? data.gamePlayerNamesA[0] : ""}</span>
          </div>
          <div className="vs-section"></div>
          <div className="player-section">
            <img
              src={RESOURCE_URL + "teams/" + data.gamePlayerAvatarB[0]}
              alt="game-player"
            />
            <span>{data.gamePlayerNamesB ? data.gamePlayerNamesB[0] : ""}</span>
          </div>
        </div>
        <div className="profile-table-result-section">
          <div className="profile-result-kills">
            <span>Kills</span>
            <span>{data.kills}</span>
          </div>
          <div className="profile-result-kills">
            <span>Death</span>
            <span>{data.death}</span>
          </div>
        </div>
        <div className="profile-table-result-section">
          <div className="profile-result-kills">
            <span>Win rounds</span>
            <span>{data.winrounds}</span>
          </div>
          <div className="profile-result-kills">
            <span>Lose rounds</span>
            <span>{data.loserounds}</span>
          </div>
        </div>
        <div className="profile-table-action-section">
          <div className="report-btn">Report</div>
        </div>
      </div>

      <div className="profile-table-card-mobile">
        <div className={"profile-card-bg-" + data.gameType}></div>
        <div className="mobile-profile-table-header">
          <div className={"profile-card-logo-" + data.gameType}></div>
          <span>{data.time + ", " + data.rnftAmount + "RNFT"}</span>
          <div className="report-btn">Report</div>
        </div>
        <div className="header-hr-line"></div>
        <div className="profile-table-player-section">
          <div className="player-section">
            <img
              src={RESOURCE_URL + "teams/" + data.gamePlayerAvatarA[0]}
              alt="game-player"
            />
            <span>{data.gamePlayerNamesA ? data.gamePlayerNamesA[0] : ""}</span>
          </div>
          <div className="vs-section"></div>
          <div className="player-section">
            <img
              src={RESOURCE_URL + "teams/" + data.gamePlayerAvatarB[0]}
              alt="game-player"
            />
            <span>{data.gamePlayerNamesB ? data.gamePlayerNamesB[0] : ""}</span>
          </div>
        </div>
        <div className="profile-table-result-section">
          <div className="profile-result-kills">
            <span>Kills</span>
            <span>{data.kills}</span>
          </div>
          <div className="profile-result-kills">
            <span>Death</span>
            <span>{data.death}</span>
          </div>
          <div className="profile-result-kills">
            <span>Win rounds</span>
            <span>{data.winrounds}</span>
          </div>
          <div className="profile-result-kills">
            <span>Lose rounds</span>
            <span>{data.loserounds}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTableCard;
