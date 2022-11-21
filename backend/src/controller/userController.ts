import {UserSequelize} from '../database'
import { Request, Response } from 'express'



export async function store(request: Request , response: Response) {
        const { name , email } = request.body;
        const user = await UserSequelize.create({ name, email });
        return response.json(user);
    }

export async function index(request: Request , response: Response) {
        const users = await UserSequelize.findAll();
        return response.json(users);
    }


export async function delet(request: Request , response: Response) {
    const { id } = request.params;
    await UserSequelize.destroy({ where: { id } });
    return response.status(200).send({
        mensage: 'Usuario excluido com sucesso!'
    });
}

export async function update(request: Request , response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;
    await UserSequelize.update({ name, email }, { where: { id } });
    return response.json({name, email});
}

export async function findByName(request: Request , response: Response) {
    const { name } = request.params;
    const user = await UserSequelize.findAll({ where: { name } });
    return response.json(user);
}

export async function findByI(request: Request , response: Response) {
    const { id } = request.params;
    const user = await UserSequelize.findByPk(id);
    return response.json(user);
}

// export async function findByI(request: Request , response: Response) {
//     const { id } = request.params;
//     const user = await UserSequelize.findAll({ where: { id } });
//     return response.json(user);
// }

     