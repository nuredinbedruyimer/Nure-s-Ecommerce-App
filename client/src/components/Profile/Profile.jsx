import React, { useState } from "react";
import styles from "../../styles/style";
import ProfileContent from "./ProfileContent";
import ProfileSideBar from "./ProfileSideBar";

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={`${styles.section} flex bg-[#f5f5f5] py-10 h-auto`}>
      <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
        <ProfileSideBar active={active} setActive={setActive} />
      </div>
      <ProfileContent active={active} />
    </div>
  );
};

export default Profile;
