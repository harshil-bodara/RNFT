import React, { Fragment, useEffect, useState } from "react";

import ProfileHeader from "./profileheader";
import ProfileGameCards from "./profilegames";
import ProfileTable from "./profiletable";

import "../../assets/css/profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const _profileData = {
      bgImg: "profile-bg.png",
      playerName: "SuperJetPack",
      avatar: "my-avatar.png",
      regDate: "22.01.2022",
      country: "en",
      totalEarning: "$ARD 2,023",
      totalLose: "$ARD 2,023",
      accuracy: "56.1%",
      avgBetsize: "$ARD 2,023",
      maxBetsize: "$ARD 3,761",
    };
    setProfileData(_profileData);
  }, []);

  return (
    <Fragment>
      <div className="my-profile-section">
        <ProfileHeader headerData={profileData} />
        <ProfileGameCards />
        <ProfileTable />
      </div>
    </Fragment>
  );
};

export default Profile;
