import express from 'express';
import TodoController from '../controllers/todo.controller';

const router = express.Router()

router.get('/all', TodoController.getAllTodo);

// router.post('/add-new',  TodoController.createTodo)

export default router