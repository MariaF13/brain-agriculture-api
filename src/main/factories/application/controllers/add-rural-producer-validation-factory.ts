import { YupValidation } from '@/application/validation/yup-validation'
import * as yup from 'yup'

export const makeAddRuralProducerValidation = () => {
  const schema = yup
    .object()
    .shape({
      name_rural_producer: yup
        .string()
        .min(3, 'Field must be at least 3 characters long')
        .max(45, 'Field must have a maximum of 45 characters')
        .matches(
          /^[a-zA-ZÁ-Åá-åÂ-ÅâÀ-ÿ\s]+$/,
          'name_rural_producer should only contain letters, spaces, and accents'
        )
        .required(),
      cpf: yup.string().matches(/^\d{11}$/, 'CPF must have 11 digits'),
      cnpj: yup.string().matches(/^\d{14}$/, 'CNPJ must have 14 digits'),
      name_farm: yup
        .string()
        .min(3, 'Field must be at least 3 characters long')
        .max(100, 'Field must have a maximum of 100 characters')
        .required(),
      city: yup
        .string()
        .max(50, 'City must have a maximum of 50 characters')
        .required(),
      state: yup
        .string()
        .max(50, 'State must have a maximum of 50 characters')
        .required(),
      total_area_hectares: yup
        .number()
        .min(0, 'Total area must be a positive value')
        .required(),
      arable_area_hectares: yup
        .number()
        .min(0, 'Arable area must be a positive value')
        .required(),
      vegetation_area_hectares: yup
        .number()
        .min(0, 'Vegetation area must be a positive value')
        .required(),
      planted_crops: yup
        .array()
        .of(yup.number().min(1, 'ID of planted crop must be a positive number'))
        .min(1, 'At least one planted crop ID is required')
        .required()
    })
    .test(
      'cpf-or-cnpj',
      'At least one of CPF or CNPJ is required',
      function (value) {
        const { cpf, cnpj } = value
        if (!cpf && !cnpj) {
          return this.createError({
            message: 'At least one of CPF or CNPJ is required'
          })
        }
        return true
      }
    )
    .test(
      'area-sum',
      'The sum of arable area and vegetation area must not exceed the total area',
      function (value) {
        const {
          total_area_hectares,
          arable_area_hectares,
          vegetation_area_hectares
        } = value
        if (
          total_area_hectares <
          arable_area_hectares + vegetation_area_hectares
        ) {
          return this.createError({
            message:
              'The sum of arable area and vegetation area must not exceed the total area'
          })
        }
        return true
      }
    )

  return new YupValidation(schema)
}
