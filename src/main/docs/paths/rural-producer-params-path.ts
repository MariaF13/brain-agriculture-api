export const ruralProducerParamsPath = {
  put: {
    tags: ['Rural Producer'],
    summary: 'API para atualizar dados do Produtor',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID do produtor a ser atualizado',
        required: true,
        schema: {
          type: 'number'
        }
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/ruralProducer'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'true'
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
  },
  get: {
    tags: ['Rural Producer'],
    summary: 'API para consultar um produtor por ID',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID do produtor a ser respondida',
        required: true,
        schema: {
          type: 'number'
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
  },
  delete: {
    tags: ['Rural Producer'],
    summary: 'API para deletar dados do Produtor Rural',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID do Produtor Rural a ser deletado',
        required: true,
        schema: {
          type: 'number'
        }
      }
    ],
    responses: {
      200: {
        description: 'string'
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
