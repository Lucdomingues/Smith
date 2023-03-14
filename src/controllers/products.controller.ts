import { Request, Response } from 'express';
import productsServices from '../services/products.service';

const createProdutc = async (req: Request, res: Response) => {
  try {
    const result = await productsServices.createProdutc(req.body);

    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};
 
const productsController = { createProdutc };

export default productsController;