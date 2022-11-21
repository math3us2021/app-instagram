import { UserRepositorySequelize } from "./sequelize";
import { User } from "./user";


export interface UserRepository {
    get(): Promise<User[]>;
}

export const userRepository = new UserRepositorySequelize();
