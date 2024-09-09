import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60m",
  });
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
  return refreshToken;
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

export { generateAccessToken, generateRefreshToken, verifyToken };
