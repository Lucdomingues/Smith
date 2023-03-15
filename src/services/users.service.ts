import { ILogin, IUser } from '../interfaces/users.interface';
import usersModel from '../models/users.model';
import generateToken from '../utils/generateToken';

const createUser = async (newUser: IUser) => {
  const result = await usersModel.create(newUser);
  const { username, vocation, level } = result;

  return generateToken({ username, vocation, level });
};

const login = async (logn: ILogin) => {
  const users = await usersModel.login(logn);

  if (users.length === 0 || users[0].password !== logn.password) {
    return false;
  }

  const objValueToken = {
    username: users[0].username,
    vocation: users[0].vocation,
    level: users[0].level,
  };
  
  return generateToken(objValueToken);
};

const usersServices = { createUser, login };

export default usersServices;