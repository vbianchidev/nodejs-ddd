
import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connect (uri: string): Promise<void> {
    const mongoOptions: object = { useNewUrlParser: true, useUnifiedTopology: true }
    this.client = new MongoClient(uri, mongoOptions)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
