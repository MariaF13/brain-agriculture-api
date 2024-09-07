import { HttpResponse } from '@/application/contracts'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  message: 'Request com sintaxe errada',
  body: error.message
})

export const notAcceptable = (data: any): HttpResponse => ({
  statusCode: 406,
  message: 'Não aceito',
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  message: 'Erro Interno no Servidor',
  body: error.message
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  message: 'Sucesso',
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  message: 'Criado com sucesso',
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  message: 'Nenhum conteúdo encontrado'
})
