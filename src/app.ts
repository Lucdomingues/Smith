import express from 'express';
import routeProducts from './routers/products.route';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

export default app;
