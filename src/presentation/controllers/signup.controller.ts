import {HttpResponse,HttpRequest} from '../protocols/http'
import{MissingParamError}from'../erros/error/missing-param-error'
import{ badRequest } from '../helpers/http-helper'
import {Controller} from '../protocols/controller'
import {EmailValidator}from '../protocols/email-validator'
import{InvalidParamError}from '../erros/error/invalid-param-error'
export class SignUpController implements Controller {
  private readonly emailValidator:EmailValidator
  
   constructor (emailValidator: EmailValidator){
    this.emailValidator = emailValidator
  }
  
  
  
  
  
  handle (httpRequest: HttpRequest): HttpResponse {
      const requireFields = ['name','email','password','passwordConfirmation']
      for(const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field)) 
      }
  }
   const isValid =this.emailValidator.isValid(httpRequest.body.email)
   if(!isValid){
    return badRequest(new InvalidParamError('email'))
   }  
}
}
