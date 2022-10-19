import express from 'express';
import { TodoController } from '../controllers';

const router = express.Router()

router.get('/all',TodoController.getAllTodo)

router.post('/create', TodoController.createTodo)

export default router