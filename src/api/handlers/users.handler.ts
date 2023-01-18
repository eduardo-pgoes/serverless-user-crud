import { Handler, Context } from "aws-lambda";
import { UsersController } from "../controllers/users.controller";

const usersController = new UsersController();

export const create: Handler = async (
    event: any,
    context: Context,
    callback: any
) => {
    callback(null, await usersController.create(event))
};