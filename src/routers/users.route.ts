import express from 'express';
import usersController from '../controllers/users.controller';
import {
  validateUsername, validateVocation, validateLevel, validatePassword,
} from '../middlewares/validateUsers';

const route = express.Router();

route.post(
  '/',
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
  usersController.createUser,
);

export default route;