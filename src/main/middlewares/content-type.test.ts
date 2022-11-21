import request from 'supertest'
import app from '../config/app'

// eslint-disable-next-line no-undef
describe('Cors Middleware', () => {
  // eslint-disable-next-line no-undef
  test('Should return default content type as json ', async () => {
    app.get('/teste_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/teste_content_type')
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced ', async () => {
    app.get('/teste_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/teste_content_type_xml')
      .expect('content-type', /xml/)
  })
})
