import { SignUpController } from './signup.controller'
import{MissingParamError}from'../erros/error/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 if is no name is provided', () => {
    const sut = new SignUpController()
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
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if is no password is provided', () => {
    const sut = new SignUpController()
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
    const sut = new SignUpController() // SUT - System Under Testing - Famoso: O cara que eu to testando
    const httpRequest = { // Simulando um request que veio sem passwordConfirmation
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

  // test('Should return 400 if the passords is not equal', () => {
  //   const sut = new SignUpController()
  //   const httpRequest = {
  //     body: {
  //       name: 'any_name',
  //       email: 'any_email@mail.com',
  //       password: 'any_password',
  //       passwordConfirmation: 'any_password1'
  //     }
  //   }
    //const httpResponse = sut.handle(httpRequest)
    //expect(httpResponse.statusCode).toBe(400)
    //expect(httpResponse.body).toEqual(new MissingParamError('Passwords dont match'))
  // })

  // test('Should return 200 if all params is provided', () => {
  //   const sut = new SignUpController()
  //   const httpRequest = {
  //     body: {
  //       name: 'any_name',
  //       email: 'any_email@mail.com',
  //       password: 'any_password',
  //       passwordConfirmation: 'any_password'
  //     }
  //   }
  //   const httpResponse = sut.handle(httpRequest)
  //   expect(httpResponse.statusCode).toBe(200)
  //   expect(httpResponse.body).toEqual({ name: 'any_name', email: 'any_email@mail.com' })
  })

