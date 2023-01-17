import User from '../models/users.model';
import * as dotenv from 'dotenv'

dotenv.config();
var AWS = require('aws-sdk');

new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_ID
})

console.log(process.env.ACCESS_KEY_ID);

/*
    setting up a db schema/instance or configuring seems worth the hassle, I'll develop this service later...
*/
export class UsersService {
    async create(user: User): Promise<object> {
        console.log(user);
        return Promise.reject("bro?");
    }
}