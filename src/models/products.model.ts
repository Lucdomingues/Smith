import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  
  return rows;
};

const create = async (newProduct: IProduct): Promise<IProduct> => {
  const { name, amount } = newProduct;

  const rows = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?);
    `, [name, amount]);
  
  const [dataInserted] = rows;
  const { insertId } = dataInserted;
  
  return { id: insertId, ...newProduct };
};

const productsModel = { create, getAll };

export default productsModel;