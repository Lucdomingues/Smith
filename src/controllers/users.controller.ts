import { Request, Response } from 'express';
import usersServices from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const token = await usersServices.createUser(req.body);

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};
 
const usersController = { createUser };

export default usersController;