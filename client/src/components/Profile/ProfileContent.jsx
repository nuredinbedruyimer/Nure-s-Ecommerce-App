import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/style";
import AllOrders from "./AllOrders";
import Refund from "./Refund";
import OrderVisting from "./OrderVisting";
import PaymentMethod from "./PaymentMetod";
import Address from "./Address";

const ProfileContent = ({ active }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      {active == 1 && (
        <>
          <div className="flex justify-center w-full ">
            <div className=" relative">
              {/* You Have to Add User Image Over Here From Our Backend Server */}
              <img
                src="https://images.pexels.com/photos/17731675/pexels-photo-17731675/free-photo-of-a-little-girl-using-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[purple]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="w-full px-5 mt-16">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone-Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Country</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <input
                className={`w-[250px] hover:bg-purple-300  h-[40px] border border-[purple] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}
      {active == 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {active == 5 && (
        <div>
          <OrderVisting />
        </div>
      )}
      {active == 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}
      {active == 7 && (
        <div>
          <Address />
        </div>
      )}
      {active == 3 && (
        <div>
          <Refund />
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
