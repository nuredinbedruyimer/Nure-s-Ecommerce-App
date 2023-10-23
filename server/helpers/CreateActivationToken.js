import JWT from "jsonwebtoken";

export const CreateActivationToken = (user) => {
  const createdActivationToken = JWT.sign(
    user,
    process.env.ACTIVATION_TOKEN_SECRET,
    { expiresIn: "30m" }
  );
  return createdActivationToken;
};
export const CreateActivationURL = (activationToken) => {
  const CreatedActivationURL = `http://localhost:5173/activation/${activationToken}`;
  return CreatedActivationURL;
};
export const shopActivationURL = (activationToken) => {
  const CreatedActivationURL = `http://localhost:5173/shop/activation/${activationToken}`;
  return CreatedActivationURL;
};
