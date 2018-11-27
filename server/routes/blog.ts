import { Router } from "express";
import {checkAuth} from "./../middleware/index";

export class blogRoutes {
    private router: Router = Router();

    public getRouter(): Router {
        this.router.get("/blog", (req, res) => {
            res.status(200).send('Should get all blogs');
        })

        this.router.post("/blog",checkAuth, (req, res) => {

            res.status(201).send('Blog created');
        })
        return this.router;
    }
}