import { StatusCodes } from "http-status-codes";
import User from "../models/users.model";
import { UsersService } from "../services/users.service";

const usersService = new UsersService();

export class UsersController {
    async create(data: any) {
        const userData = data.queryStringParameters; // when we get to use AWS instead of Postman, this will become data.body
        const user = new User();

        // data validation for fixed User type
        try {
            user.user = userData.user;
            user.password = userData.password; // to-do: add pwd validation (JWT?)
        } catch (error) {
            if (!user.user) {
                throw {
                    message: "User name cannot be null or empty.",
                    code: StatusCodes.BAD_REQUEST
                };
            }
            if (!user.password) {
                throw {
                    message: "User password cannot be null or empty.",
                    code: StatusCodes.BAD_REQUEST
                };
            }
        }

        const result = await usersService.create(user);
        return result; // to-do: develop usersService.create()
    }
}