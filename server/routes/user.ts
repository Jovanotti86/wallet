import { Router, Request, Response } from "express";
import * as _ from 'lodash';
import { UserServices } from "./../models/User/user.services";
import { IUser, Ijwt, IRequest } from "./../models/interfaces";
import { createJwt, getUserDetails } from "./../models/helper";
import { checkAuth } from "../middleware";
import { ObjectId } from "bson";
import * as bcrypt from 'bcrypt';


export class userRoutes {
    private router: Router = Router();

    public getRouter(): Router {
        
        this.router.post("/user/signup", async (req, res) => {
           try {
            const body = _.pick(req.body, ['email', 'password', 'confirmpassword']);
            
            if(body.password !== body.confirmpassword) {
                res.status(400).send({
                    message: 'Passwords are not same'
                })
            }
        
            const user: IUser = {
                _id: new ObjectId,
                email: body.email,
                password: body.password
            };
            const newUser = await UserServices.createUser(user);
            const jwt: Ijwt = createJwt(newUser);

            res.send({
                jwt
            });
           } catch (e) {
               res.status(400).send(e);
           }
        });

        this.router.post("/user/login", async (req: IRequest, res: Response) => {
          const body = _.pick(req.body, ['email', 'password']);
          const token = await UserServices.checkCredentials(body.email, body.password);
          res.send(token);
        });

        this.router.get("/user",checkAuth, (req: IRequest, res: Response) => {
            res.send(req.user);
        });

        return this.router;
    }
}