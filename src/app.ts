import express from 'express';
import routeProducts from './routers/products.route';
import routeUsers from './routers/users.route';
import routeOrders from './routers/orders.route';
import routeLogin from './routers/login.route';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);
app.use('/users', routeUsers);
app.use('/orders', routeOrders);
app.use('/login', routeLogin);

export default app;
