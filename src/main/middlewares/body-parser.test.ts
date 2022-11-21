import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/teste_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/teste_body_parser')
      .send({ name: 'luan' })
      .expect({ name: 'luan' })
  })
})
