import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';


const connectDB = async () => {
        try {
                const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
                console.log("Mongoose Connect", connectionInstance.connection.host)
        } catch (error) {
                console.log("Mongoose connect error", error)
        }
}

export default connectDB;