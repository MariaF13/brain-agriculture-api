// Classe que implementa validação usando Yup.
// - Implementa a interface `Validation`.
// - Recebe um esquema de validação Yup (`objectSchema`) no construtor.
// - O método `validate` tenta validar o `input` com o esquema usando `validateSync`.
//   - Se a validação falhar, captura os erros e cria uma instância de `MissingParamError`,
//     contendo as mensagens de erro concatenadas.
// - `abortEarly: false` permite que todas as falhas de validação sejam coletadas antes de interromper o processo.

import { Validation } from '@/application/contracts'
import * as yup from 'yup'
import { MissingParamError } from '../errors'

export class YupValidation implements Validation {
  constructor(private readonly objectSchema: any) {}
  validate(input: any): Error | undefined {
    try {
      this.objectSchema.validateSync(input, {
        abortEarly: false
      })
    } catch (errors) {
      const e = errors as yup.ValidationError
      return new MissingParamError(e.errors.join(', '))
    }
  }
}
