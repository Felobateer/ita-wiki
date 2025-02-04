import Koa, { Middleware } from 'koa'
import { User } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { addVoteCountToResource } from '../../helpers/addVoteCountToResource'
import { resourceFavoriteSchema } from '../../schemas'

export const getFavoriteResources: Middleware = async (ctx: Koa.Context) => {
  const user = ctx.user as User
  const { categorySlug } = ctx.params
  const favorites = await prisma.favorites.findMany({
    where: {
      userId: user.id,
      resource: {
        ...(categorySlug && {
          topics: {
            some: {
              topic: {
                category: { slug: categorySlug },
              },
            },
          },
        }),
      },
    },
    select: {
      resource: {
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          url: true,
          resourceType: true,
          createdAt: true,
          updatedAt: true,
          status: true,
          userId: true,
          topics: true,
          vote: { select: { vote: true } },
        },
      },
    },
  })

  const parsedResources = favorites.map((resource) => {
    const resourceWithVote = addVoteCountToResource(resource.resource)
    return resourceFavoriteSchema.parse(resourceWithVote)
  })

  ctx.status = 200
  ctx.body = parsedResources
}
