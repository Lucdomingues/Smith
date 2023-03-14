import { Request, Response } from 'express';
import productsServices from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productsServices.getAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const createProdutc = async (req: Request, res: Response) => {
  try {
    const result = await productsServices.createProdutc(req.body);

    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};
 
const productsController = { createProdutc, getAllProducts };

export default productsController;