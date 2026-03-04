import mongoose from "mongoose"

export const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");

  }catch(err){
    console.error("Error connecting to Mongo DB ",err); 
    process.exit(1);   
    // 1 status code means fail , 0 means success
  } 
}