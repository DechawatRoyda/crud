// import  mongoose  from "mongoose";

// const connectMongoDB = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("Connected to MongoDB.");
//     } catch (error) {
//         console.log(error);
        
//     }
// };

// export default connectMongoDB;
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectMongoDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}  