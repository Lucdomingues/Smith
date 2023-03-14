import IProduct from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const createProdutc = async (newProduct: IProduct): Promise<IProduct> => {
  const result = await productsModel.create(newProduct);

  return result;
};

const productsServices = { createProdutc };

export default productsServices;