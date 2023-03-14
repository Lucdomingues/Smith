import express from 'express';
import routeProducts from './routers/products.route';
import routeUsers from './routers/users.route';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);
app.use('/users', routeUsers);

export default app;
