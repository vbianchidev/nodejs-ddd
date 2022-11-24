
import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  uri: null as String,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    const mongoOptions: object = { useNewUrlParser: true, useUnifiedTopology: true }
    this.client = new MongoClient(uri, mongoOptions)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise <Collection> {
    if (!this.client.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  }
}
