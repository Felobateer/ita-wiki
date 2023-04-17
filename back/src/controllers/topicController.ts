import Koa, { Middleware } from 'koa'
import { prisma } from '../prisma/client'

export const getTopics: Middleware = async (ctx: Koa.Context) => {
    const topics = await prisma.topic.findMany({
        select: {
            id: true,
            topic: true,
        }
    });
    ctx.status = 200;
    ctx.body = topics;
}