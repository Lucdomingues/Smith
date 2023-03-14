import IUsers from '../interfaces/users.interface';
import usersModel from '../models/users.model';
import generateToken from '../utils/generateToken';

const createUser = async (newUser: IUsers) => {
  const result = await usersModel.create(newUser);
  const { username, vocation, level } = result;

  return generateToken({ username, vocation, level });
};

const usersServices = { createUser };

export default usersServices;