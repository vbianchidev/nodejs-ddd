export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new Error('Missing param: password')
      }
    }
    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('Missing param: passwordConfirmation')
      }
    }
    if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('Passwords dont match')
      }
    }
    return {
      statusCode: 200,
      body: {
        name: httpRequest.body.name,
        email: httpRequest.body.email
      }
    }
  }
}
