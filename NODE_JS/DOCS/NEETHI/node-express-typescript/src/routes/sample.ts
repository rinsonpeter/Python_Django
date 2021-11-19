import express from 'express';
import { Request, Response, NextFunction } from 'express';
const router = express.Router();

const sample = (req: Request, res: Response, next: NextFunction) => {
    console.log("Sample Route Called");
    
    return res.status(200).json({
        message: 'Hello World'
    })
}

router.get('/hello', sample);

export = router;