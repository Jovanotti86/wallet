"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("./blog");
const user_1 = require("./user");
const payment_1 = require("./payment");
function apiRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('routes inicialized');
        app.use("/v1", new blog_1.blogRoutes().getRouter());
        app.use("/v1", new user_1.userRoutes().getRouter());
        app.use("/v1", new payment_1.paymentRoutes().getRouter());
        app.use("/v1/", (req, res) => {
            res.status(200).send('hello frou routing api');
        });
    });
}
exports.apiRoutes = apiRoutes;
