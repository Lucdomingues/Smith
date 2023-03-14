import IProduct from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAll();

  return products;
};

const createProdutc = async (newProduct: IProduct): Promise<IProduct> => {
  const result = await productsModel.create(newProduct);

  return result;
};

const productsServices = { createProdutc, getAllProducts };

export default productsServices;