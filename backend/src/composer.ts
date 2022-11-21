import { userRepository } from "./models/user";
import { GetUser } from "./useCase/user/get";


export const getUser = new GetUser(userRepository)