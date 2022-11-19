import {EmailValidatorAdapter} from './email-validator'
import validator from 'validator'
import isEmail from 'validator/lib/isEmail'

jest.mock('validator',()=>({
    isEmail (): Boolean{
        return true 
    }
}))

describe('EmailValidator Adapter',()=>{
    
test('Should return false is validator returns false',()=>{
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator,'isEmail').mockReturnValueOnce(false)
    const isValid= sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
})

test('Should return true is validator returns false',()=>{
    const sut = new EmailValidatorAdapter()
    const isValid= sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
})





})


