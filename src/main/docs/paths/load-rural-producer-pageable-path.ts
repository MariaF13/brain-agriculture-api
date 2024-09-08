export const loadRuralProducerPageablePath = {
  get: {
    tags: ['Rural Producer'],
    summary: 'API para carregar produtores rurais com paginação',
    parameters: [
      {
        in: 'query',
        name: 'pageNumber',
        description: 'Número da Página',
        schema: {
          type: 'number'
        }
      },
      {
        in: 'query',
        name: 'size',
        description: 'Quantidade de itens por página',
        schema: {
          type: 'number'
        }
      },
      {
        in: 'query',
        name: 'orderBy',
        description: 'Ordenar por qual campo?',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'order',
        description: 'Tipo de ordenação (ASC ou DESC)',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'cpf',
        description: 'Filtro por cpf',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'cnpj',
        description: 'Filtro por cnpj',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'name_rural_producer',
        description: 'Filtro por name_rural_producer',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'name_farm',
        description: 'Filtro por name_farm',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'city',
        description: 'Filtro por city',
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'state',
        description: 'Filtro por state',
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      200: {
        description: 'Sucesso'
      },
      204: {
        description: 'Sem dados para exibir'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
