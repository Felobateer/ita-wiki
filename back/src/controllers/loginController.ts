import Koa from 'koa'
import jwt, { Secret } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { checkPassword } from '../helpers/passwordHash'

const prisma = new PrismaClient()

export const loginController = async (ctx: Koa.Context) => {
  const { dni, password } = ctx.request.body
  const dniUpperCase = dni.toUpperCase()

  try {
    const user = await prisma.user.findUnique({
      where: { dni: dniUpperCase as string },
      select: { id: true, password: true }
    })

    if (!user) {
      ctx.status = 401
      ctx.body = { error: 'User not found' }
      return
    }

    const isPasswordValid = await checkPassword(password, user.password)

    if (!isPasswordValid) {
      ctx.status = 401
      ctx.body = { error: 'Invalid password' }
      return
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY as Secret, {
      expiresIn: '1d'
    })

    ctx.cookies.set('token', token, { httpOnly: true })

    ctx.status = 204
  } catch (error) {
    ctx.status = 500
    ctx.body = { error }
  }
}