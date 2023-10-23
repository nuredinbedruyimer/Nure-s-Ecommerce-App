// creating and sending token for our user and save it to Cookies
export const sendToken = async (user, statusCode, res) => {
  const token = user.getJwtToken();
  console.log(token);

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  return res.status(statusCode).cookie("token", token, options).send({
    seccuss: true,
    user,
    token,
  });
};
export const sendShopToken = async (shop, statusCode, res) => {
  const token = shop.getJwtToken();
  console.log(token);

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  return res.status(statusCode).cookie("shop_token", token, options).send({
    seccuss: true,
    shop,
    token,
  });
};
