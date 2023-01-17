import User from '../models/users.model';

/*
    setting up a db schema/instance or configuring seems worth the hassle, I'll develop this service later...
*/
export class UsersService {
    async create(user: User): Promise<object> {
        console.log(user);
        return Promise.reject("bro?");
    }
}