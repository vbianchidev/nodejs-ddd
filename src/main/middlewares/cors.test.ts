import request from 'supertest'
import app from '../config/app'

// eslint-disable-next-line no-undef
describe('Cors Middleware', () => {
  // eslint-disable-next-line no-undef
  test('Should enable CORS', async () => {
    app.get('/teste_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/teste_cors')
      .expect('acces-control-allow-origin', '*')
      .expect('acces-control-allow-methods', '*')
      .expect('acces-control-allow-headers', '*')
  })
})
