import { Router } from "express";

const router = Router();

import todoRoute from './todo.route';
import accountRoute from './account.route';

router.use('/todo', todoRoute)
router.use('/account', accountRoute)

export default router;