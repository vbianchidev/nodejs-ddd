
import { Encrypter,AddAccountModel,AccountModel,AddAcountRepository } from '../usercase/db-add-account-protocol'
import {DbAddAccount} from './db-add-account'




const makeEncrypter = ():Encrypter=>{
    class EncrypterStub implements Encrypter{
        async encrypt (value:string):Promise <string>{
            return new Promise(resolve =>resolve('hashed_password'))
        }
    }
    return new EncrypterStub()
}
const makeAddAccountRepository = ():AddAcountRepository=>{
    class addAccountRepositoryStub implements AddAcountRepository{
        async add(accountData: AddAccountModel): Promise<AccountModel>{
            const fakeAccount ={
                id:'valid_id',
                name:'valid_name',
                email:'valid_email',
                password:'hashed_password'
            }
            return new Promise(resolve =>resolve(fakeAccount))
        }
    }
    return new addAccountRepositoryStub()
}
const makeSut =():SutTypes=>{
    
    const encrypterStub = makeEncrypter()
    const addAccountRepositoryStub = makeAddAccountRepository()
    const sut = new DbAddAccount(encrypterStub,addAccountRepositoryStub) 
    return{
        sut,
        encrypterStub,
        addAccountRepositoryStub
    } 
}
interface SutTypes{
    sut: DbAddAccount
    encrypterStub: Encrypter
    addAccountRepositoryStub:AddAcountRepository
}

describe('DbAddAccount Usecase', () =>{
    
test ('Should throw  Encrypter throws', async ()=>{
    const {sut,encrypterStub}= makeSut()
    const encryptSpy = jest.spyOn(encrypterStub,'encrypt')
    const accontuData={
        name:'valid_name',
        email:'valid_email',
        password:'valid_password'
    }
     await sut.add(accontuData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
})
test ('Should call  Encrypter with correct password', async ()=>{
    const {sut,encrypterStub}= makeSut()
   jest.spyOn(encrypterStub,'encrypt').mockReturnValueOnce(new Promise((resolve , reject) => reject(new Error())))
    const accontuData={
        name:'valid_name',
        email:'valid_email',
        password:'valid_password'
    }
     const promise =  sut.add(accontuData)
    expect(promise).rejects.toThrow()
})

test ('Should throw  AddAccountRepository with correct values', async ()=>{
    const {sut,addAccountRepositoryStub}= makeSut()
    const addtSpy = jest.spyOn(addAccountRepositoryStub,'add')
    const accontuData={
        name:'valid_name',
        email:'valid_email',
        password:'valid_password'
    }
     await sut.add(accontuData)
    expect(addtSpy).toHaveBeenCalledWith({
        name:'valid_name',
        email:'valid_email',
        password:'hashed_password'
    })
})











})        