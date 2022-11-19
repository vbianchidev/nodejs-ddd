import {AddAccount,AddAccountModel,AccountModel,Encrypter,AddAcountRepository} from './db-add-account-protocol'



export class DbAddAccount implements AddAccount{
    private readonly encrypter:Encrypter
    private readonly addAccountRepository:AddAcountRepository
    
    constructor(encrypter: Encrypter,addAccountRepository:AddAcountRepository ){
        this.encrypter = encrypter
        this.addAccountRepository = addAccountRepository
    }
    async add (accountData: AddAccountModel): Promise<AccountModel>{
     const hashedPassword = await this.encrypter.encrypt(accountData.password)
    this.addAccountRepository.add(Object.assign({},accountData,{password:hashedPassword}))
    return new Promise(resolve => resolve(null))
    }
}