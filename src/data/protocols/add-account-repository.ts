import{AddAccountModel} from '../../domain/usercases/add-account'
import {AccountModel} from '../../domain/model/account'

export interface AddAcountRepository{
    add(accountData: AddAccountModel): Promise<AccountModel>
}