import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({

    // type casting
    // cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    // api_key: process.env.CLOUDINARY_API_KEY as string,    
    // api_secret: process.env.CLOUDINARY_API_SECRET as string,


// non- null assertion - means assuring it is not null for typescript
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME! ,
    api_key: process.env.CLOUDINARY_API_KEY! ,    
    api_secret: process.env.CLOUDINARY_API_SECRET! ,
});

export default cloudinary;