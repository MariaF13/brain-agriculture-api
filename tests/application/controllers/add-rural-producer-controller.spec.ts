import { AddRuralProducerController } from '@/application/controllers'
import { faker } from '@faker-js/faker'
import { ValidationSpy, AddRuralProducerSpy } from '@/tests/application/mocks'
import { MissingParamError } from '@/application/errors'
import { badRequest, created, serverError } from '@/application/helpers'

const mockRequest = (): AddRuralProducerController.Request => {
  return {
    cpf: faker.datatype.string(),
    cnpj: faker.datatype.string(),
    name_rural_producer: faker.name.fullName(),
    name_farm: faker.name.fullName(),
    city: faker.address.city(),
    state: faker.address.state(),
    total_area_hectares: faker.datatype.number(),
    arable_area_hectares: faker.datatype.number(),
    vegetation_area_hectares: faker.datatype.number(),
    planted_crops: [faker.datatype.number()]
  }
}

type SutTypes = {
  sut: AddRuralProducerController
  addRuralProducerSpy: AddRuralProducerSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addRuralProducerSpy = new AddRuralProducerSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddRuralProducerController(addRuralProducerSpy, validationSpy)
  return {
    sut,
    addRuralProducerSpy,
    validationSpy
  }
}

describe('AddRuralProducerController', () => {
  it('should return 500 if AddRuralProducer throws', async () => {
    const { sut, addRuralProducerSpy } = makeSut()
    jest.spyOn(addRuralProducerSpy, 'add').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should call AddRuralProducer with correct values', async () => {
    const { sut, addRuralProducerSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addRuralProducerSpy.params).toEqual(request)
  })

  it('should return 201 if AddRuralProducer returns statusCode 201', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(
      created({
        id_rural_producer: 1,
        statusCode: 201,
        message: 'Created successfully'
      })
    )
  })

  it('should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  it('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
