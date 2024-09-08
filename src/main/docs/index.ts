import { API } from '@/utils/constants'
import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API - Brain Agriculture',
    description: 'Ambiente Backend Brain Agriculture',
    version: '1.0.0',
    contact: {
      name: 'Maria Mendonça',
      email: 'maria.mendonca.developer@gmail.com',
      url: 'https://www.linkedin.com/in/maria-mendon%C3%A7a-b24614214/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  servers: [
    {
      url: API,
      description: 'Servidor Principal'
    }
  ],
  tags: [
    {
      name: 'Rural Producer',
      description: 'APIs relacionadas ao Controle de produtores rurais'
    },
    {
      name: 'Planted Crops',
      description: 'APIs relacionadas ao Controle de culturas'
    }
  ],
  paths,
  schemas,
  components
}
