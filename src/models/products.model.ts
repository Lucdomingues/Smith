import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const create = async (newProduct: IProduct): Promise<IProduct> => {
  const { name, amount } = newProduct;

  const rows = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?);
    `, [name, amount]);
  
  const [dataInserted] = rows;
  const { insertId } = dataInserted;
  
  return { id: insertId, ...newProduct };
};

const productsModel = { create };

export default productsModel;