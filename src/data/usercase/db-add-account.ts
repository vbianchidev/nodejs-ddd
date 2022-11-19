import {AddAccount,AddAccountModel} from '../../domain/usercases/add-account'
import {AccountModel} from '../../domain/model/account'
import {Encrypter} from '../protocols/encrypter'


export class DbAddAccount implements AddAccount{
    private readonly encrypter:Encrypter
    
    constructor(encrypter: Encrypter){
        this.encrypter = encrypter
    }
    async add (account: AddAccountModel): Promise<AccountModel>{
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
    }
}