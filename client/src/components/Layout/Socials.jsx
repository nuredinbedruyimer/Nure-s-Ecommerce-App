import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div>
      <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
        <h1 className="text-2xl">Loge Here</h1>

        <p>Lorem, ipsum dolor sit amet</p>
        <div className="flex items-center mt-[15px]">
          <AiFillFacebook size={25} className="cursor-pointer" />

          <AiOutlineTwitter
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
            color="blue"
          />
          <AiFillInstagram
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
          />
          <AiFillYoutube
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
            color="red"
          />
          <AiFillLinkedin
            size={25}
            style={{ marginLeft: "15px", cursor: "pointer" }}
            color="blue"
          />
        </div>
      </ul>
    </div>
  );
};

export default Socials;
