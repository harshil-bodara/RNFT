import React, { Fragment } from "react";

import IMG_STREAM_ICO from "../../assets/images/icons/profile-stream-ico.svg";
import IMG_FORTUN_ICO from "../../assets/images/icons/profile-fortnite-ico.svg";
import IMG_BATTLE_ICO from "../../assets/images/icons/profile-battle-ico.svg";
import IMG_TELEGR_ICO from "../../assets/images/icons/profile-telegram-ico.svg";
import IMG_INSTAG_ICO from "../../assets/images/icons/profile-instagram-ico.svg";
import IMG_YOUTUB_ICO from "../../assets/images/icons/profile-youtube-ico.svg";
import IMG_PENCIL_ICO from "../../assets/images/icons/pencil-ico.svg";
import IMG_LOGOUT_ICO from "../../assets/images/icons/logout-ico.svg";

const RESOURCE_URL = "resources/images/";

const ProfileHeader = ({ headerData }) => {
  return (
    <Fragment>
      <div className="profile-header-section">
        <div className="profile-bg-section">
          <img
            src={RESOURCE_URL + "profile/" + headerData.bgImg}
            alt="profile-bg"
            className="profile-bg"
          />
        </div>
        <div className="avatar-section">
          <img
            src={RESOURCE_URL + "profile/" + headerData.avatar}
            className="avatar-img"
          />
        </div>
        <div className="profile-info-section">
          <div className="social-profile">
            <a href="#">
              <img
                src={IMG_STREAM_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
            <a href="#">
              <img
                src={IMG_FORTUN_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
            <a href="#">
              <img
                src={IMG_BATTLE_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
          </div>
          <div className="profile-info">
            <div className="profile-name-section">
              <img
                src={RESOURCE_URL + "flags/flag-" + headerData.country + ".svg"}
                alt={headerData.country}
              />
              <span>{headerData.playerName}</span>
            </div>
            <div className="profile-registered-section">
              <span>
                Registration:&nbsp;<span>{headerData.regDate}</span>
              </span>
            </div>
            <div className="edit-profile-section">
              <a href="/profile-edit" className="btn-edit-profile">
                <img src={IMG_PENCIL_ICO} alt="icon" className="pencil-ico" />
                <span>Edit Profile</span>
              </a>
            </div>
          </div>
          <div className="social-profile">
            <a href="#">
              <img
                src={IMG_TELEGR_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
            <a href="#">
              <img
                src={IMG_INSTAG_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
            <a href="#">
              <img
                src={IMG_YOUTUB_ICO}
                alt="icon"
                className="profile-social-links"
              />
            </a>
          </div>
        </div>
        <div className="profile-benefit-section">
          <div className="profile-benefit">
            <span>{headerData.totalEarning}</span>
            <span>Total earnings</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.totalLose}</span>
            <span>Total loses</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.accuracy}</span>
            <span>Accuracy</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.avgBetsize}</span>
            <span>Average bet size</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.maxBetsize}</span>
            <span>Max bet size</span>
          </div>
        </div>

        <div className="mobile-profile-benefit-section">
          <div className="profile-benefit">
            <span>{headerData.totalEarning}</span>
            <span>Total earnings</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.totalLose}</span>
            <span>Total loses</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.maxBetsize}</span>
            <span>Max bet size</span>
          </div>
        </div>

        <div className="mobile-profile-benefit-section">
          <div className="profile-benefit">
            <span>{headerData.accuracy}</span>
            <span>Accuracy</span>
          </div>
          <div className="profile-vt-line"></div>
          <div className="profile-benefit">
            <span>{headerData.avgBetsize}</span>
            <span>Average bet size</span>
          </div>
        </div>

        <div className="mobile-profile-social">
          <a href="#">
            <img
              src={IMG_STREAM_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
          <a href="#">
            <img
              src={IMG_FORTUN_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
          <a href="#">
            <img
              src={IMG_BATTLE_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
          <a href="#">
            <img
              src={IMG_TELEGR_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
          <a href="#">
            <img
              src={IMG_YOUTUB_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
          <a href="#">
            <img
              src={IMG_INSTAG_ICO}
              alt="icon"
              className="profile-social-links"
            />
          </a>
        </div>

        <div className="exit-account">
          <img src={IMG_LOGOUT_ICO} alt="icon" />
          <span>Exit Account</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileHeader;
