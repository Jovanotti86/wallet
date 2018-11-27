"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _ = __importStar(require("lodash"));
const user_services_1 = require("./../models/User/user.services");
const helper_1 = require("./../models/helper");
const middleware_1 = require("../middleware");
const bson_1 = require("bson");
class userRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/user/signup", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = _.pick(req.body, ['email', 'password', 'confirmpassword']);
                if (body.password !== body.confirmpassword) {
                    res.status(400).send({
                        message: 'Passwords are not same'
                    });
                }
                const user = {
                    _id: new bson_1.ObjectId,
                    email: body.email,
                    password: body.password
                };
                const newUser = yield user_services_1.UserServices.createUser(user);
                const jwt = helper_1.createJwt(newUser);
                res.send({
                    jwt
                });
            }
            catch (e) {
                res.status(400).send(e);
            }
        }));
        this.router.post("/user/login", (req, res) => {
            const body = _.pick(req.body, ['email', 'password']);
            res.send(body);
        });
        this.router.get("/user", middleware_1.checkAuth, (req, res) => {
            res.send(req.user);
        });
        return this.router;
    }
}
exports.userRoutes = userRoutes;
