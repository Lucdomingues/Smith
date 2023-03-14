import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IOrder from '../interfaces/orders.interface';

const getAll = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<(IOrder & RowDataPacket)[]>(`
  SELECT t1.id, t1.user_id AS userId, JSON_ARRAYAGG(t2.id) AS productsIds
  FROM Trybesmith.orders AS t1
  INNER JOIN Trybesmith.products AS t2
  ON t1.id = t2.order_id
  GROUP BY t1.id;
    `);
  
  return orders;
};

const ordersModel = { getAll };

export default ordersModel;