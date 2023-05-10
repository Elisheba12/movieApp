import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function generateToken(userExists) {
  const payload = {
    _id: userExists._id,
    password: userExists.password,
    username: userExists.username
  }
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
  return token
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.TOKEN_SECRET)
}