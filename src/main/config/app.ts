import setupSwagger from '@/main/config/swagger'
import express from 'express'
import { setupRoutes } from './routes'
import setupMiddlewares from '@/main/config/middlewares'

const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export { app }
