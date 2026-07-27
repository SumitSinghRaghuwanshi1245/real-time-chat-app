import mongoose from 'mongoose';

const connectDb = async () => {
    const url = process.env.MONGODB_URI;

    if(!url){
        throw new Error("MongoDB url not defined in url");
    }

    try {

        await mongoose.connect(url,{
            dbName: "ChatAppMicroserviceapp"
        });
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.error("Failed to Connect to MongoDB", error);
    }

}


export default connectDb;