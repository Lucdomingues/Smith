import { Request, Response } from 'express';
import ordersServices from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await ordersServices.getAllOrders();

    return res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};
 
const ordersController = { getAllOrders };

export default ordersController;