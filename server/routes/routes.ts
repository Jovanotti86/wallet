import { Application } from "express";
import { blogRoutes } from "./blog";
import { userRoutes } from "./user";
import { paymentRoutes } from "./payment";


export async function apiRoutes(app: Application) {

    console.log('routes inicialized');


    app.use("/v1", new blogRoutes().getRouter());
    app.use("/v1", new userRoutes().getRouter());
    app.use("/v1", new paymentRoutes().getRouter());

    app.use("/v1/", (req, res) => {
        res.status(200).send('hello frou routing api');
    })
    
}