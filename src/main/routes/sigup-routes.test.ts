import request from 'supertest'
import app from '../config/app'

// eslint-disable-next-line no-undef
describe('SignUp Routes', () => {
  // eslint-disable-next-line no-undef
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/sigup')
      .send({
        name: 'Luan',
        email: 'luanBanhos@gmail.com',
        password: 'Luan123',
        passwordConfirmationn: 'Luan123'
      })
      .expect(200)
  })
})
