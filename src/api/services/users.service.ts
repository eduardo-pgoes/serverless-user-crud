import User from '../models/users.model';
import * as dotenv from 'dotenv'
import knex from 'knex';
import config from '../../db/knexfile';
import { StatusCodes } from "http-status-codes";

dotenv.config();
var AWS = require('aws-sdk');

const tableName = "users";
const db = knex(config["development"]);

export class UsersService {
    async create(user: User): Promise<object> {
        const promisify = () => new Promise((resolve, reject) => db.transaction(resolve));
        const trx: any = await promisify();

        try {
            let instance: object = await trx
            .insert({user: user.user, password: user.password})
            .into(tableName)
            .returning("*");

            await trx.commit();

            let result = {
                message: "Sucessfully added a user.",
                code: StatusCodes.OK,
                instance: instance
            }

            console.log("Success.");

            return Promise.resolve(result);
        } catch (err) {
            let result = {
                message: "Error adding a user.",
                code: StatusCodes.BAD_REQUEST, // to-do: set up correct status codes for the create transaction
            }

            return Promise.reject(result);
        }
    }
}