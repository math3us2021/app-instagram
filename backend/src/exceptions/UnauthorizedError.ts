
import { HttpError } from './httpError'

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(message, 400)

    this.name = 'UnauthorizedError'
  }
}
