import express from 'express';
import productsController from '../controllers/products.controller';
import {
  validateName,
  validateAmount,
  validateStringIsRequired,
} from '../middlewares/validateProducts';

const route = express.Router();

route.get('/', productsController.getAllProducts);
route.post(
  '/',
  validateStringIsRequired,
  validateName,

  validateAmount,

  productsController.createProdutc,
);

export default route;