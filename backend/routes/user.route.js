import express from 'express';
const router = express.Router();
import { User } from '../models/user.model.js';
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
} from '../controllers/user.controller.js';

router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
