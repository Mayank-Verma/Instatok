import jwt from "jsonwebtoken";

const verifyTokenFromAuthorizationAndGetPayload = (authHeader) => {
  try {
    const token = authHeader && authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return payload;
  } catch (err) {
    console.log("err->", err);

    return null;
  }
};

export default verifyTokenFromAuthorizationAndGetPayload;
