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
const helper_1 = require("./../models/helper");
const user_services_1 = require("../models/User/user.services");
function checkAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header('auth') || '';
        if (!helper_1.validateJwt(token)) {
            res.status(401).send({
                message: "You are not logged in"
            });
        }
        ;
        const tokenData = helper_1.getUserDetails(token);
        req.user = yield user_services_1.UserServices.findUserById(tokenData['_id']);
        next();
    });
}
exports.checkAuth = checkAuth;
