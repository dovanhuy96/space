import express from 'express';
import AccountController from '../controllers/account.controller';

const router = express.Router()

router.post('/login', AccountController.login);


export default router