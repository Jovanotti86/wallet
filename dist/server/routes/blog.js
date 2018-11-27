"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("./../middleware/index");
class blogRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.get("/blog", (req, res) => {
            res.status(200).send('Should get all blogs');
        });
        this.router.post("/blog", index_1.checkAuth, (req, res) => {
            res.status(201).send('Blog created');
        });
        return this.router;
    }
}
exports.blogRoutes = blogRoutes;
