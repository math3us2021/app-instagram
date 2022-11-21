import { UserRepository } from "src/models/user";
import { User } from "src/models/user/user";
import { UseCase } from "../interface";
import {Request} from "../interface/index"


export class GetUser implements UseCase
    <undefined,
        {id: string},
        undefined,
        User["publicInfo"][]> {


    constructor(
        private userRepository: UserRepository,
    ) { }

    async execute(params: Request <undefined, {id: string}> ) {
        const users = await this.userRepository.get();
        params.params.id
        return {
            status: 200,
            body: users
        }
    }
}