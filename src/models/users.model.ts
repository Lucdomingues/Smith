import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUsers from '../interfaces/users.interface';

const create = async (newUser: IUsers): Promise<IUsers> => {
  const { username, vocation, level, password } = newUser;

  await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?);
    `, [username, vocation, level, password]);

  return { ...newUser };
};

const usersModel = { create };

export default usersModel;