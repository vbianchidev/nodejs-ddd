import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Luan',
        email: 'luanBanhos@gmail.com',
        password: 'Luan123',
        passwordConfirmationn: 'Luan123'
      })
      .expect(200)
  })
})
