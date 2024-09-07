export const ruralProducerPath = {
  post: {
    tags: ['Rural Producer'],
    summary: 'API para criar um produtor rural',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addRuralProducer' // Referência ao schema atualizado
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Produtor rural criado com sucesso'
      },
      204: {
        description: 'Sem dados para exibir'
      },
      400: {
        $ref: '#/components/badRequest'
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
