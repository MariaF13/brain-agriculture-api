export const plantedCropsPath = {
  get: {
    tags: ['Planted Crops'],
    summary: 'API para consultar todas as culturas',
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
