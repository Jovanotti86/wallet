import { Response, NextFunction } from "express";
import { validateJwt, getUserDetails } from "./../models/helper";
import { IRequest } from "./../models/interfaces";
import { UserServices } from "../models/User/user.services";

export async function  checkAuth(req: IRequest, res: Response, next: NextFunction) {
    const token: string = req.header('auth') || '';
    if(!validateJwt(token)) {
        res.status(401).send({
            message: "You are not logged in"
        })   
    };
    const tokenData = getUserDetails(token);
    req.user = await UserServices.findUserById(tokenData['_id']);
    next();
}