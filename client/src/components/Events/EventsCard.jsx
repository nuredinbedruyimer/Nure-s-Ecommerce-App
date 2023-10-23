import React from "react";
import styles from "../../styles/style";
import CountDown from "./CountDown";

const EventsCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex mb-12 p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          delectus? Possimus consequatur repudiandae provident et iure
          distinctio adipisci eligendi quod alias. Velit, consequuntur dicta
          quisquam praesentium quasi ut eum placeat ab? Magnam sequi enim
          eveniet. Voluptate maiores, ad in ut eius sint incidunt officiis
          suscipit quisquam harum assumenda nisi sapiente facere error molestias
          amet. Asperiores tempora odio illo vero minus rem at et eligendi rerum
          soluta m saepe cupiditate ab velit. Assumenda sapiente voluptate nihil
          sunt quia delectus excepturi quidem hic. Iste earum cumque odit. Id
          temporibus tempora quasi ea placeat aspernatur nulla iusto explicabo
          consequuntur excepturi eveniet molestiae ad at, soluta laudantium. Aut
          ullam accusamus eos optio, cumque alias, molestias nisi hic dolorum
          eum laboriosam laborum obcaecati beatae totam blanditiis
          reprehenderit.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1233
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              1111
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#d0dad3]">
            {" "}
            SOLD OUT
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventsCard;
