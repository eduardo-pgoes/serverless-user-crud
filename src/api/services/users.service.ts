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
        return db.transaction(function (trx) {
            db.insert({user: user.user, password: user.password})
            .into('users')
            .then(trx.commit)
            .catch(trx.rollback)
        });
    }

    async read(): Promise<object> {
        let res;
        try {
            res = await db
            .select()
            .from('users');
        } catch (err) {
            throw {
                message: "Error when selecting users.",
                code: StatusCodes.BAD_REQUEST // to-do: select correct status code for this
            }
        }

        console.log(res);

        return Promise.resolve(res); // to-do: adapt the result to Amazon's API Gateway format
    }

    async readByID(id: number) {
        let res;
        try {
            res = await db
            .select()
            .from('users')
            .where('id', id);
        } catch (err) {
            throw {
                message: "Error when selecting users.",
                code: StatusCodes.BAD_REQUEST // to-do: select correct status code for this
            }
        }

        console.log(res);

        return Promise.resolve(res); // to-do: adapt the result to Amazon's API Gateway format
    }
}