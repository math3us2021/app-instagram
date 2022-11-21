import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

type TokenPayload = {
    token: string,
    user: {
        id: number,
        email: string
    }
}

export function auth(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const token = authToken.split(' ')[1]
        console.log(token)
        jwt.verify(token, process.env.API_KEY as string, (err, data ) => {
            if(err){
                return res.status(401).json({message: 'Token inválido'})
            }else{
                const empresa = "Empresa do Matheus"
                req.body.empresa = empresa
                req.body.token = token
                req.body.user = data

                // const {token, user} = data as TokenPayload
                // res.json({message: 'Token válido'})
                next();

                // const req = data as TokenPayload
                // req.token = token
                // req.user = data as TokenPayload['user']
                // console.log(req.token)
                // console.log(req.user.email)
            }  
        })


    }else{
        res.status(401).json({message: 'Token inválido'})       
    }



}