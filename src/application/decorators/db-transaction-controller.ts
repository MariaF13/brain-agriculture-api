import {
    Controller,
    DbTransaction,
    HttpResponse
  } from '@/application/contracts'
  
  export class DbTransactionController implements Controller {
    constructor(
      private readonly decoratee: Controller, // Controlador decorado que será usado para processar a requisição
      private readonly db: DbTransaction 
    ) {}
  
    async handle(httpRequest: any): Promise<HttpResponse> {
      try {
        // Processa a requisição delegando ao controlador decorado
        const httpResponse = await this.decoratee.handle(httpRequest)
        return httpResponse
      } catch (error) {
        // Propaga o erro caso ocorra durante o processamento
        throw error
      }
    }
  }
