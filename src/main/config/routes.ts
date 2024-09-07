// Função para configurar as rotas do aplicativo Express.
// - Cria um `Router` do Express para agrupar as rotas.
// - Lê o diretório `../routes` e filtra os arquivos, excluindo aqueles que terminam com `.map`.
// - Para cada arquivo, importa-o dinamicamente e invoca o export padrão com o `router`.
// - Usa o `router` no aplicativo Express, mapeando todas as rotas para a constante `API` definida nos utilitários.

import { API } from '@/utils/constants'
import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  readdirSync(join(__dirname, '../routes'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      ;(await import(`../routes/${file}`)).default(router)
    })
  app.use(API, router)
}
