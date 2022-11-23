export default {
  mongoUrl: global.__MONGO_URI__ || 'mongodb://localhost:27017/nodejs-ddd',
  port: process.env.PORT || 3030
}
