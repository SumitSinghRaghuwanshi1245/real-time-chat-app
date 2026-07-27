import type { NextFunction, Request, Response, RequestHandler } from "express";

const TryCatch = (handler: RequestHandler): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await handler(req, res, next);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };
};

export default TryCatch;