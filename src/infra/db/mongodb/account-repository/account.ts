
import { AddAcountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/model/account'
import { AddAccountModel } from '../../../../domain/usercases/add-account'
import { MongoHelper } from './helpers/mongo.helper'

export class AccountMongoRepository implements AddAcountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const id = String(result.insertedId)
    return Object.assign({}, { id, ...accountData })
  }
}
