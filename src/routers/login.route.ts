import express from 'express';
import usersController from '../controllers/users.controller';

const route = express.Router();

route.post('/', usersController.login);

export default route;