import jwt, { SignOptions } from 'jsonwebtoken';
import ILogin from '../interfaces/login.interfece';

const JWT_SECRET = process.env.JWT_SECRET || 'max';
const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const generateToken = (payload: ILogin) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
 
export default generateToken;