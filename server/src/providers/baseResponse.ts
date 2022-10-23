/**
 *        @file response_wrapper.ts
 * @application wlp-app
 *     @summary common response
 * @description Defines the structure for response
 */

import { Response } from 'express'

interface responseObject {
    success: boolean
    data: object
    status?: number
}

export class BaseResponse {
    public res: Response

    constructor(response: Response) {
        this.res = response
    }

    public handle(response: responseObject, code: number): Response {
        let failCode = 400;
        if (code) {
            return this.res.status(code).send(response)
        }
        if (response.status) {
            failCode = response.status
        }

        delete response.status
        return this.res.status(failCode).send(response)
    }

    public created(response: responseObject): Response {
        return this.handle(response, 201)
    }

    public ok(response: responseObject): Response {
        return this.handle(response, 200)
    }

    public unauthorized(response: responseObject): Response {
        return this.handle(response, 401)
    }

    public forbidden(response: responseObject): Response {
        return this.handle(response, 403)
    }
    public badRequest(response: responseObject): Response {
        return this.handle(response, 400)
    }
}
