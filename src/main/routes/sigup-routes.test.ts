import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/account-repository/helpers/mongo.helper'

import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Luan',
        email: 'luanBanhos@gmail.com',
        password: 'Luan123',
        passwordConfirmation: 'Luan123'
      })
      .expect(200)
  })
})
