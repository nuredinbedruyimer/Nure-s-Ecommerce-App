import React, { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

const ProductDetailInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Movie Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Movie Review
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            {" "}
            Director Info
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptate inventore possimus eum sapiente sed unde repellat deleniti
            animi praesentium suscipit quo, autem cumque veritatis sequi
            architecto mollitia nostrum et laudantium quidem! Beatae sit error,
            ipsam voluptates eius, a quasi inventore excepturi suscipit nostrum
            dicta debitis ut modi numquam. Voluptatibus ad, cupiditate nihil vel
            corrupti, veritatis laudantium ut provident, rem expedita molestias.
            Quasi velit vel consequuntur natus voluptatibus, nobis explicabo
            minima libero est reiciendis voluptas commodi accusamus esse
            expedita enim perspiciatis dignissimos recusandae, veniam ipsum
            suscipit in magni error tempore cupiditate! Rerum quo sit eveniet
            vitae, quas neque ipsa amet saepe, hic fuga suscipit, possimus
            blanditiis? Ipsa, est quo odio magni error molestias facilis
            architecto aperiam, dolor voluptate cupiditate fugiat nesciunt
            officia eaque ex, deleniti reprehenderit ratione quod sint veritatis
            ducimus impedit ipsum. Blanditiis repellendus aut rem
            exercitationem, dolor voluptatibus molestiae adipisci voluptatem
            eveniet incidunt similique. Modi recusandae minus, cupiditate
            deserunt atque ipsam itaque? Minima culpa magni explicabo dicta
            voluptate? Nam officia nobis repudiandae fugit quia eaque accusamus
            repellat alias dignissimos commodi, enim et porro. Nobis voluptates
            optio hic nesciunt, veniam deleniti dolore similique, deserunt
            tenetur quis ea, tempore sapiente enim velit nulla dicta. Eligendi
            amet modi beatae recusandae odit.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptate inventore possimus eum sapiente sed unde repellat deleniti
            animi praesentium suscipit quo, autem cumque veritatis sequi
            architecto mollitia nostrum et laudantium quidem! Beatae sit error,
            ipsam voluptates eius, a quasi inventore excepturi suscipit nostrum
            dicta debitis ut modi numquam. Voluptatibus ad, cupiditate nihil vel
            corrupti, veritatis laudantium ut provident, rem expedita molestias.
            Quasi velit vel consequuntur natus voluptatibus, nobis explicabo
            minima libero est reiciendis voluptas commodi accusamus esse
            expedita enim perspiciatis dignissimos recusandae, veniam ipsum
            suscipit in magni error tempore cupiditate! Rerum quo sit eveniet
            vitae, quas neque ipsa amet saepe, hic fuga suscipit, possimus
            blanditiis? Ipsa, est quo odio magni error molestias facilis
            architecto aperiam, dolor voluptate cupiditate fugiat nesciunt
            officia eaque ex, deleniti reprehenderit ratione quod sint veritatis
            ducimus impedit ipsum. Blanditiis repellendus aut rem
            exercitationem, dolor voluptatibus molestiae adipisci voluptatem
            eveniet incidunt similique. Modi recusandae minus, cupiditate
            deserunt atque ipsam itaque? Minima culpa magni explicabo dicta
            voluptate? Nam officia nobis repudiandae fugit quia eaque accusamus
            repellat alias dignissimos commodi, enim et porro. Nobis voluptates
            optio hic nesciunt, veniam deleniti dolore similique, deserunt
            tenetur quis ea, tempore sapiente enim velit nulla dicta. Eligendi
            amet modi beatae recusandae odit.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptate inventore possimus eum sapiente sed unde repellat deleniti
            animi praesentium suscipit quo, autem cumque veritatis sequi
            architecto mollitia nostrum et laudantium quidem! Beatae sit error,
            ipsam voluptates eius, a quasi inventore excepturi suscipit nostrum
            dicta debitis ut modi numquam. Voluptatibus ad, cupiditate nihil vel
            corrupti, veritatis laudantium ut provident, rem expedita molestias.
            Quasi velit vel consequuntur natus voluptatibus, nobis explicabo
            minima libero est reiciendis voluptas commodi accusamus esse
            expedita enim perspiciatis dignissimos recusandae, veniam ipsum
            suscipit in magni error tempore cupiditate! Rerum quo sit eveniet
            vitae, quas neque ipsa amet saepe, hic fuga suscipit, possimus
            blanditiis? Ipsa, est quo odio magni error molestias facilis
            architecto aperiam, dolor voluptate cupiditate fugiat nesciunt
            officia eaque ex, deleniti reprehenderit ratione quod sint veritatis
            ducimus impedit ipsum. Blanditiis repellendus aut rem
            exercitationem, dolor voluptatibus molestiae adipisci voluptatem
            eveniet incidunt similique. Modi recusandae minus, cupiditate
            deserunt atque ipsam itaque? Minima culpa magni explicabo dicta
            voluptate? Nam officia nobis repudiandae fugit quia eaque accusamus
            repellat alias dignissimos commodi, enim et porro. Nobis voluptates
            optio hic nesciunt, veniam deleniti dolore similique, deserunt
            tenetur quis ea, tempore sapiente enim velit nulla dicta. Eligendi
            amet modi beatae recusandae odit.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          <p>No Product Review</p>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full flex flex-col 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt=""
                className="w-14 h-14 rounded-full mr-2"
              />
              <div className="pr-8">
                <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                  {data.shop.name}
                </h3>

                <h5 className="pb-2  text-[15px]">
                  {data.shop.ratings + " "}Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quis praesentium quam minima autem sequi sunt fuga ut obcaecati
              voluptas aspernatur cum aliquid, eius, necessitatibus dicta illo
              veniam perspiciatis provident dolores dolore. Debitis et iure
              inventore dicta dignissimos necessitatibus vitae ipsum vero eos.
              Doloremque, beatae.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5>
                Follow Us In : <span>Date Right Here</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">33333</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Review: <span className="font-[500]">33333</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailInfo;
