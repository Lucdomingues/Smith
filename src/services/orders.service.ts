import IOrder from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAll();

  return orders;
};

const ordersServices = { getAllOrders };

export default ordersServices;