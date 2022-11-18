import {HttpResponse,HttpRequest} from '../protocols/http'
import{MissingParamError}from'../erros/error/missing-param-error'
import{ badRequest } from '../helpers/http-helper'
import {Controller} from '../protocols/controller'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
      const requireFields = ['name','email','password','passwordConfirmation']
      for(const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field)) 
      }
    
    }
  }
}
