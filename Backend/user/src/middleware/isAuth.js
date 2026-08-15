import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const isAuth = async (req, res, next) => {
    try{ 
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            res.status(401).json({
                message: "Please login - No auth Header"
            });

            return;
        }

        const token = authHeader.split(" ")[1];

        const decodedValue = jwt.verify(token, process.env.JWT_SECRET)

        if(!decodedValue || !decodedValue.user){
            res.status(401).json({
                message:  "Invalid token",
            });
            return;
        }

        req.user = decodedValue.user;

        next();
    }
    catch (error){
        res.status(400).json({
            message: "Please login - JWT error",
        })
    }
}
