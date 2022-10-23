import { Request, Response } from 'express'
import TodoModel from '../models/todo.model';
import { BaseResponse } from '../providers/baseResponse';

class TodoController extends BaseResponse {

    
    public static async getAllTodo(req: Request, res: Response) {
        const response: BaseResponse = new BaseResponse(res)
        const todos =  await TodoModel.find();
        const result = {
            success: true,
            data: todos,
            status: 200
        }
        return response.created(result)
    }

    public static async createTodo(req: Request, res: Response) {
        // try {
        //     const todo: any = await TodoModel.create({
        //         name: 'learing Nodejs',
        //         status: 'start'
        //     });
        //     const result = {
        //         success: true,
        //         data: todo,
        //         status: 200
        //     }
        //     // const response: ResponseWrapper = new ResponseWrapper(res)
        //     // return this.response.created(result)
        //     this.super.created(result)
            
        // } catch (error) {
        //     console.log(error);
        // }
        
    }
}
export default TodoController;