import { verifyToken } from "../utils/jwt.js";

export function userAuth(req, res, next) {
  const token = req.header('auth_token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = verifyToken(token);
    req.user = verified;
    next();

  } catch (error) {
    res.status(400).send('Invalid Token');
  }
}