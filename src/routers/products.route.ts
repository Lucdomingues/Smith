import express from 'express';
import productsController from '../controllers/products.controller';

const route = express.Router();

route.post('/', productsController.createProdutc);

export default route;