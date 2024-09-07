// Interface para controladores.
// - O método `handle` recebe uma requisição `request` de tipo genérico `T` e retorna uma `Promise` de `HttpResponse`.


import { HttpResponse } from "./http";

export interface Controller<T = any> {
    handle: (request: T) => Promise<HttpResponse>
}