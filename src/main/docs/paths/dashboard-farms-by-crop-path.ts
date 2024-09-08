export const dashboardFarmsByCropPath = {
  get: {
    tags: ['Rural Producer'],
    summary: 'API para listar o total de fazendas por cultura',
    responses: {
      200: {
        description: 'Sucesso'
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
