import { StatusCodes } from "http-status-codes";
import User from "../models/users.model";
import { UsersService } from "../services/users.service";

const usersService = new UsersService();

export class UsersController {
    /*
        Validates user information and sends it over for the database
    */
    async create(data: any) {
        let user = this.dataToUser(data);
        const result = await usersService.create(user);
        return result;
    }

    /*
        Reads all information from the users table
    */
    async read(event: any) {
        const result = await usersService.read();
        return result;
    }

    /*
        Tries to find specific user in users table
    */
    async readByID(data: any) {
        const id = data.pathParameters.id;
        const result = await usersService.readByID(id);
        return result;
    }

    /*
        Handles API call data to User model conversion (see: ../models/users.models.ts)
    */
    private dataToUser(data: any) {
        const userData = data.queryStringParameters;
        const user = new User();

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

        return user;
    }
}