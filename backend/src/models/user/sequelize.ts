import {Sequelize} from "sequelize/types";
import { UserRepository } from ".";
import { User } from "./user";
import { UserSequelize } from '../../database'


export class UserRepositorySequelize implements UserRepository {
    sequelize: Sequelize['models']['Users'];
    constructor(){
        this.sequelize = UserSequelize;
    }

    async get(): Promise<User[]> {
        const users = await this.sequelize.findAll();
        if(!users) {throw new Error('No users found');
    }else{
            return users.map(user => new User(user.toJSON()));
        }
    }

}