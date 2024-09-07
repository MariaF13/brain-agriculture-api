import { Middleware } from '@/application/middlewares'
import { Request, Response, NextFunction } from 'express'

export const adaptExpressMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const params = Object.keys(req.params)
    let modifiedUrl = req.url

    params.forEach(param => {
      modifiedUrl = modifiedUrl.replace(`/${req.params[param]}`, `/:${param}`)
    })
    const request = {
      id_module: req.query.id_module,
      url_route: modifiedUrl.split('?')[0],
      method_route: req.method,
      ...(req.headers || {})
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json(httpResponse)
    }
  }
}
