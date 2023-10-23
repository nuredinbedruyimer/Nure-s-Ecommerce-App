import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShopActivation = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  console.log(activation_token);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(
            `http://localhost:8000/api/v1/shop/activation`,
            {
              activation_token,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            console.log("It Is Working");
          })
          .catch((err) => {
            setError(true);
            console.log(err);
            console.log(" Nure There is error In Shop Activation Page");
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <div>
          <p>Your account has been created suceessfully!</p>
          <Link to="/">Back To Home Page</Link>
        </div>
      )}
    </div>
  );
};

export default ShopActivation;
