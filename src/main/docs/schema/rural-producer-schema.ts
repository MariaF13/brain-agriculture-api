export const addRuralProducerSchema = {
  type: 'object',
  properties: {
    name_rural_producer: {
      type: 'string'
    },
    cpf: {
      type: ['string']
    },
    cnpj: {
      type: ['string']
    },
    name_farm: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    total_area_hectares: {
      type: 'number'
    },
    arable_area_hectares: {
      type: 'number'
    },
    vegetation_area_hectares: {
      type: 'number'
    },
    planted_crops: {
      type: 'array',
      items: {
        type: 'number'
      }
    }
  },
  required: [
    'name_rural_producer',
    'name_farm',
    'city',
    'state',
    'total_area_hectares',
    'arable_area_hectares',
    'vegetation_area_hectares',
    'planted_crops'
  ]
}
