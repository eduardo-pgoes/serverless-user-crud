import { Handler, Context } from "aws-lambda";
import { UsersController } from "../controllers/users.controller";

const usersController = new UsersController();

/*
    Handles API calls for creating users
*/
export const create: Handler = async (
    event: any,
    context: Context,
    callback: any
) => {
    callback(null, await usersController.create(event))
};

/*
    Handles API calls for reading entries in the user table
*/
export const read: Handler = async (
    event: any,
    context: Context,
    callback: any
) => {
    callback(null, await usersController.read(event))
};

/*
    Handles API calls for reading entries in the user table by ID
*/
export const readByID: Handler = async (
    event: any,
    context: Context,
    callback: any
) => {
    callback(null, await usersController.readByID(event))
};