import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
    return res.status(200).json({message:"success!"})
}

export const create = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
    return res.status(200).json({message:"success!"})
}

export const remove = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
    return res.status(200).json({message:"success!"})
}

export const update = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
    return res.status(200).json({message:"success!"})
}