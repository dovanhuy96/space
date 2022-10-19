import { Request, Response } from 'express'
import { ResponseWrapper } from '../providers/response_wrapper';


export class TodoController {
    constructor() {

    }
    public static async getAllTodo(req: Request, res: Response) {
        const response: ResponseWrapper = new ResponseWrapper(res)
        const result = {
            success: true,
            data: {
                title: 'wellcome to my app'
            },
            status: 200
        }

        return response.ok(result)
    }

    public static async createTodo(req: Request, res: Response) {
        // const response: ResponseWrapper = new ResponseWrapper(res)
        // return response.created(result)
    }
}