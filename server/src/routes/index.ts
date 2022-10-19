import { Router } from "express";

const router = Router();

import todoRoute from './todo.route';

router.use('/todo', todoRoute)

export default router