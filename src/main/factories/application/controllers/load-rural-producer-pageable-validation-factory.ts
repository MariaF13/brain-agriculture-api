import { Validation } from '@/application/contracts'
import { YupValidation } from '@/application/validation/yup-validation'
import * as yup from 'yup'

export const makeLoadRuralProducerPageableValidation = (): Validation => {
  const schema = yup.object().shape({
    pageNumber: yup.string().matches(/^\d+$/, 'pageNumber must be a number'),
    size: yup.string().matches(/^\d+$/, 'size must be a number'),
    orderBy: yup.string(),
    order: yup
      .string()
      .oneOf(['ASC', 'DESC'], 'only types ASC and DESC are allowed'),
    name_rural_producer: yup
      .string()
      .min(3, 'Field must be at least 3 characters long')
      .max(45, 'Field must have a maximum of 45 characters'),
    cpf: yup.string(),
    cnpj: yup.string(),
    name_farm: yup
      .string()
      .min(3, 'Field must be at least 3 characters long')
      .max(100, 'Field must have a maximum of 100 characters'),
    city: yup.string().max(50, 'City must have a maximum of 50 characters'),
    state: yup.string().max(50, 'State must have a maximum of 50 characters')
  })

  return new YupValidation(schema)
}
