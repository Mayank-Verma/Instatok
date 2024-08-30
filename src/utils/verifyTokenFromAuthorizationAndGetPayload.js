import jwt from "jsonwebtoken";

const verifyTokenFromAuthorizationAndGetPayload = (authHeader) => {
  try {
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token=>", token);

    console.log("token secret", process.env.ACCESS_TOKEN_SECRET);

    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("payload ", payload);
    return payload;
  } catch (err) {
    console.log("err->", err);

    return null;
  }
};

export default verifyTokenFromAuthorizationAndGetPayload;
