import { SignUpController } from './signup.controller'
import{MissingParamError}from'../erros/error/missing-param-error'
import{InvalidParamError}from '../erros/error/invalid-param-error'
import {EmailValidator}from '../protocols/email-validator'

interface SutType{
  sut: SignUpController
  emailValidatorStub: EmailValidator
}


const makeSut =(): SutType =>{
  class EmailValidatorStub implements EmailValidator {
    isValid(email:string): boolean{
      return true
    }
  }
  
  const emailValidatorStub = new EmailValidatorStub()
  const sut = new SignUpController(emailValidatorStub)
  return {
    sut,
    emailValidatorStub
  }
}

describe('SignUp Controller', () => {
  test('Should return 400 if is no name is provided', () => {
    const  { sut }  = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError ('name'))
  })

  test('Should return 400 if is no email is provided', () => {
    const  { sut }  = makeSut()
    const httpRequest = {
      body: {
        name: 'luan',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if is no password is provided', () => {
    const  { sut }  = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if is no passwordConfirmation is provided', () => {
    const {sut} = makeSut() 
    const httpRequest = { 
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
  test('Should return 400 if an invalid email is provided', () => {
    const {sut , emailValidatorStub} = makeSut()
    jest.spyOn(emailValidatorStub , 'isValid').mockReturnValueOnce(false) 
    const httpRequest = { 
      body: {
        name: 'any_name',
        email: 'invalid_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  })
  
})

