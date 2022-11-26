
import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  uri: null as String,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
