
import { Request, Response } from 'express'
import { UseCase } from 'src/useCase/interface'
import { DbError } from '../exceptions/dbError'
import { HttpError } from '../exceptions/httpError'
// import { UseCase } from '../use-case/interface'
// import { Auth } from './auth'
// // import { tokenGenerator } from './tokenGenerator' 

export function controllerExpress(useCase: UseCase <any, any, any, any>, isPublic: "PUBLIC" | "PRIVATE" = "PRIVATE") {
  
  return async (req: Request, res: Response) => {
    // let dataToken = null

    
    try {
      if(isPublic === "PRIVATE"){
        // dataToken = Auth(req.headers.authorization as string)
      }
      const response = await useCase.execute({
        body: req.body,  /// corpo da requisição
        params: req.params, //// apenas um parametro
        query: req.query, /// varios parametros
      })
      // }, dataToken)
      console.log(response)
      res.status(response.status).json(response.body)
    } catch (error) {
      
      if (error instanceof DbError || error instanceof HttpError) {
        res.status(error.code).json(error.message)
        return
      }
      console.error(error)
      res.status(500).json('Internal Server Error')
    }
  }
}

