

import { Request, Response } from 'express'
import UserModel from '../models/user.model';
import { BaseResponse } from '../providers/baseResponse';
import bcrypt from 'bcryptjs';

class AccountController extends BaseResponse {

    
    public static async login(req: Request, res: Response) {
        const response: BaseResponse = new BaseResponse(res)
        try {
            const { email, password} = req.body;
            const account: any = await UserModel.findOne({ email });
            if (!account) {
                throw new Error('Tài khoản không tồn tại !');
            }
            
            const hashPass = await bcrypt.compare(password, account.password);
            if (!hashPass) {
                throw new Error('email hoac mat khau khong dung !');
            }
            return response.ok({
                success: true,
                status: 200,
                data: account
            })
        } catch (error: any) {
            return response.badRequest({
                success: false,
                status: 400,
                data: {
                    message: error?.message || 'bad request!',
                }
            });
        }
    }

    public static async logout(req: Request, res: Response) {
        
    }
}
export default AccountController;