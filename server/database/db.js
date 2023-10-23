import mongoose from "mongoose";

const connectDB = async () => {
 try {
     const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo Database Connected Successfully on ${conn.connection.host}`);
 } catch (error) {
     console.log("Error In connecting To Mongo Database ")
     console.log(error)
    
 }
    
}
export default connectDB