import Router from '@koa/router'
import { z } from 'zod'
import { authMiddleware, validate } from '../middleware'
import { createResource } from '../controllers'
import { CreateResourceSchema } from '../schemas'

const resourcesRouter = new Router()

resourcesRouter.prefix('/api/v1/resources')

resourcesRouter.post(
  '/create',
  authMiddleware,
  validate(z.object({ body: CreateResourceSchema })),
  createResource
)

export { resourcesRouter }