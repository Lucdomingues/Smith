import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { IUser, ILogin } from '../interfaces/users.interface';

const login = async (logn: ILogin): Promise<IUser[]> => {
  const { username } = logn;

  const [rows] = await connection.execute<IUser[] & RowDataPacket[]>(`
  SELECT * FROM Trybesmith.users WHERE username = ?;
  `, [username]);
  
  return rows;
};

const create = async (newUser: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = newUser;

  await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?);
    `, [username, vocation, level, password]);

  return { ...newUser };
};

const usersModel = { create, login };

export default usersModel;