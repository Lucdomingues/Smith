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

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username) return res.status(400).json({ message: '"username" is required' });
    if (!password) return res.status(400).json({ message: '"password" is required' });

    const token = await usersServices.login(req.body);

    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    return res.status(200).json({ token });
  } catch (error) {    
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};
 
const usersController = { createUser, login };

export default usersController;