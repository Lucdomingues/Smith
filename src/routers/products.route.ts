import express from 'express';
import productsController from '../controllers/products.controller';
import {
  validateName,
  validateAmount,
} from '../middlewares/validateProducts';

const route = express.Router();

route.get('/', productsController.getAllProducts);
route.post(
  '/',
  validateName,
  validateAmount,

  productsController.createProdutc,
);

export default route;