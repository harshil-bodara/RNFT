import React, { Fragment, useState } from "react";

import AuthInput from "../inputs/authinput";
import AuthDate from "../inputs/authdate";
import AuthRegion from "../inputs/authregion";
import SocailInput from "../inputs/socialinput";
import ToggleInput from "../inputs/toggleinput";

import IMG_INPUT_USER from "../../assets/images/icons/user-input.svg";
import IMG_INPUT_PASS from "../../assets/images/icons/pass-input.svg";
import IMG_INPUT_BIRTH from "../../assets/images/icons/birth-input.svg";
import IMG_INPUT_EMAIL from "../../assets/images/icons/mail-ico.svg";

import IMG_INPUT_TWITCH from "../../assets/images/icons/fa-twitch-ico.svg";
import IMG_INPUT_STEAM from "../../assets/images/icons/fa-steam-ico.svg";
import IMG_INPUT_BATTLE from "../../assets/images/icons/fa-battle-ico.svg";
import IMG_INPUT_YOUTUBE from "../../assets/images/icons/fa-youtube-ico.svg";

import IMG_INPUT_FACEBOOK from "../../assets/images/icons/fa-facebook-ico.svg";
import IMG_INPUT_FORTUN from "../../assets/images/icons/fa-fortun-ico.svg";

const RESOURCE_URL = "resources/images/";

const ProfileEdit = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userbirth, setUserbirth] = useState("");
  const [userregion, setUserregion] = useState("");
  const [bgimgname, setBgimgname] = useState("mybg.png");

  const [userpass, setUserpass] = useState("");
  const [usernewpass, setUsernewpass] = useState("");
  const [usernewconf, setUsernewconf] = useState("");

  const [facebookname, setFacebookname] = useState("");
  const [fortunname, setFortunname] = useState("");

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handleUserbirth = (value) => {
    setUserbirth(value);
  };

  const handleUseremail = (value) => {
    setUseremail(value);
  };

  const handleUserregion = (value) => {
    setUserregion(value);
  };

  const handleUserpass = (value) => {
    setUserpass(value);
  };

  const handleUsernewpass = (value) => {
    setUsernewpass(value);
  };

  const handleUsernewconf = (value) => {
    setUsernewconf(value);
  };

  const handleFacebookname = (value) => {
    setFacebookname(value);
  };

  const handleFortunname = (value) => {
    setFortunname(value);
  };

  return (
    <Fragment>
      <div className="profile-edit-section">
        <div className="edit-back-section">
          <a href="/myprofile">{"< Back to profile"}</a>
          <span>Edit Profile</span>
        </div>

        <div className="edit-back-mobile-section">
          <a href="/myprofile">
            {"<"}
            <span>&nbsp;Edit profile</span>
          </a>
        </div>

        <div className="edit-sub-section">
          <div className="edit-sections-title">
            <span>Account</span>
          </div>

          <div className="edit-account-inputs">
            <div className="edit-input-row">
              <AuthInput
                value={username}
                setValue={handleUsername}
                icon={IMG_INPUT_USER}
                label="Username"
                placeholder="Enter username"
                type="text"
                classes="edit-profile-input"
              />
              <AuthDate
                value={userbirth}
                setValue={handleUserbirth}
                icon={IMG_INPUT_BIRTH}
                label="Date birthday"
                placeholder="DD / MM / YYYY"
                classes="edit-profile-input"
              />
            </div>
            <div className="edit-input-row">
              <AuthInput
                value={useremail}
                setValue={handleUseremail}
                icon={IMG_INPUT_EMAIL}
                label="E-mail"
                placeholder="Enter e-mail"
                type="text"
                classes="edit-profile-input"
              />
              <AuthRegion
                value={userregion}
                setValue={handleUserregion}
                label="Region"
                placeholder="Select your region"
              />
            </div>
          </div>

          <div className="edit-div-hr-line"></div>

          <div className="edit-file-upload">
            <div className="upload-action-section">
              <span>
                Replace banner image section. Optimal dimensions 2379 x 363px
              </span>
              <div className="portfolio-upload-btn">Upload new image</div>
            </div>
            <div className="upload-view-section">
              <img
                src={RESOURCE_URL + "profile/" + bgimgname}
                alt="background"
              />
            </div>
          </div>
        </div>

        <div className="edit-sub-section">
          <div className="edit-sections-title">
            <span>Change password</span>
          </div>

          <div className="edit-account-inputs">
            <div className="edit-input-row">
              <AuthInput
                value={userpass}
                setValue={handleUserpass}
                icon={IMG_INPUT_PASS}
                label="Old password"
                placeholder="Enter your password"
                type="password"
                classes="edit-profile-input"
              />
            </div>
            <div className="edit-div-hr-line"></div>
            <div className="edist-pass-text">
              Create a password with at least 6 characters. Only Latin letters,
              numbers and general punctuation symbols are allowed. <br />
              Let it be complex and original. We do not recommend using
              passwords from other sites and accounts.
            </div>
            <div className="edit-input-row">
              <AuthInput
                value={usernewpass}
                setValue={handleUsernewpass}
                icon={IMG_INPUT_PASS}
                label="New password"
                placeholder="Enter new password"
                type="password"
                classes="edit-profile-input"
              />
              <AuthInput
                value={usernewconf}
                setValue={handleUsernewconf}
                icon={IMG_INPUT_PASS}
                label="Confirm new password"
                placeholder="Enter new password"
                type="password"
                classes="edit-profile-input"
              />
            </div>
            <div className="change-pass-aciton">
              <div className="btn-change-pass">Save changes</div>
            </div>
          </div>
        </div>

        <div className="edit-sub-section">
          <div className="edit-sections-title">
            <span>Social medias</span>
          </div>

          <div className="edit-socail-actions">
            <div className="edit-social-text">
              Indicate your social networks so that the whole world is aware of
              your affairs and hello to everyone
            </div>

            <div className="edit-social-action">
              <div className="edit-social-btn btn-conn-twitch">
                <img src={IMG_INPUT_TWITCH} alt="icons" />
                <span>Connect Twitch</span>
              </div>
              <div className="edit-social-btn btn-conn-youtube">
                <img src={IMG_INPUT_YOUTUBE} alt="icons" />
                <span>Connect Youtube</span>
              </div>
              <div className="edit-social-inputs">
                <SocailInput
                  icon={IMG_INPUT_FACEBOOK}
                  value={facebookname}
                  setValue={handleFacebookname}
                  placeholder="Input facebook name"
                  type="text"
                />
              </div>
            </div>

            <div className="edit-div-hr-line"></div>

            <div className="edit-toogle">
              <ToggleInput label={"Display this information on my profile"} />
            </div>
          </div>
        </div>

        <div className="edit-sub-section">
          <div className="edit-sections-title">
            <span>Game Profiles</span>
          </div>

          <div className="edit-socail-actions">
            <div className="edit-social-text">
              Indicate your social networks so that the whole world is aware of
              your affairs and hello to everyone
            </div>

            <div className="edit-social-action">
              <div className="edit-social-btn btn-conn-stream">
                <img src={IMG_INPUT_STEAM} alt="icons" />
                <span>Connect Stream ID</span>
              </div>
              <div className="edit-social-btn btn-conn-battle">
                <img src={IMG_INPUT_BATTLE} alt="icons" />
                <span>Activision ID</span>
              </div>
              <div className="edit-social-inputs">
                <SocailInput
                  icon={IMG_INPUT_FORTUN}
                  value={fortunname}
                  setValue={handleFortunname}
                  placeholder="Input fortunite name"
                  type="text"
                />
              </div>
            </div>

            <div className="edit-div-hr-line"></div>

            <div className="edit-toogle">
              <ToggleInput label={"Display this information on my profile"} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileEdit;
