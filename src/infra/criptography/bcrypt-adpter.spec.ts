
import bcrypt from 'bcrypt'



import {BcryptAdapter } from './bcrypt-adpter'

jest.mock('bcrypt', () =>({
    async hash (): Promise<string>{
        return new Promise(resolve => resolve('senha'))
    }
}))

const salt = 12
const makeSut =():BcryptAdapter =>{
    return new BcryptAdapter(salt)
 }

describe('Bcrypt Adapter',()=>{
    
test('Should call bcrypt with correct values', async ()=>{
    const sut = makeSut()
    const hashSpy=jest.spyOn(bcrypt,'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value',salt)
})

test('Should return a hash on success', async ()=>{
    const sut = makeSut()
    const hashSut = await sut.encrypt('any_value')
    expect(hashSut).toBe('senha')
})

// test('Should throw if bcrypt throws',async ()=>{
//     const sut = makeSut()
//     jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise(reject, resolve) =>reject(new Error()))
//     const promise = sut.encrypt('any_value')
//     await expect(promise).rejects.toThrow()
    


// })





})