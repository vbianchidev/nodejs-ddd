
import {MongoClient , Collection} from 'mongodb'
import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose';



//export const MongoHelper = {
    // client: null as MongoClient,

    // async connect (uri:string): Promise<void>{
    //     this.client = MongoClient.connect(global.__MONGO_URI__,{
    //         //useNewUrlParser:true,
    //         //useUnifiedTopology: true,
    //         //useSharedDBForAllJestWorkers: false
            
    //     })
    
    // },

    // async disconnect(): Promise<void>{
    //     await this.client.close()
    // },


    // getCollection (name:string): Collection {
    //     return this.client.db().collection(name)
    // }



   
    
    // const mongoServe = new MongoMemoryServer();
    
    // exports.dbConnect = async () => {
    //   const uri = await mongoServe.getUri();
    
    //   const mongooseOpt = {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //   };
    
    //   await mongoose.connect(uri, mongooseOpt);
    // };
    
    // exports.dbDisconnect = async () => {
    //   await mongoose.connection.dropDatabase();
    //   await mongoose.connection.close();
    //   await mongoServe.stop();
    // };


    
