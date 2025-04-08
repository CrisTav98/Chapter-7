import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function dbConnect(): Promise<any | String> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = MongoMemoryServer.getUri();
    await mongoose.disconnect();
    await mongoose.connect(MONGOIO_URI, {
        dbName: "Weather"
    });
}
export default dbConnect;