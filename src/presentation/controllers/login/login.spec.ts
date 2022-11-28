import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../../error'
import { EmailValidator, HttpRequest } from '../SignUp/singup-protocols'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorSutb implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorSutb()
}
const makeFakeRequest = (): HttpRequest => ({
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
})
interface SutTypes {
  sut: LoginController
  emailValidatorSutb: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidatorSutb = makeEmailValidator()
  const sut = new LoginController(emailValidatorSutb)
  return {
    sut,
    emailValidatorSutb
  }
}
describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if  an invalid email is provided', async () => {
    const { sut, emailValidatorSutb } = makeSut()
    jest.spyOn(emailValidatorSutb, 'isValid').mockImplementationOnce(() => false)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should call EmailValidator with correct email ', async () => {
    const { sut, emailValidatorSutb } = makeSut()
    const isValidSpy = jest.spyOn(emailValidatorSutb, 'isValid')
    await sut.handle(makeFakeRequest())
    expect(isValidSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
