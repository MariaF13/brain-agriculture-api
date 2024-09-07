import { HttpResponse } from "../contracts";

export interface Middleware<T = any> {
    handle: (httpRequest: T) => Promise<HttpResponse>
  }
  