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
const user_1 = require("./user");
class UserServices {
    /**
     * Create new user after signup
     * @param user
     */
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_1.User({
                email: user.email,
                password: user.password
            });
            return yield newUser.save();
        });
    }
    /**
     * Find user by id
     * @param _id
     */
    static findUserById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(_id);
            const user = yield user_1.User.findById(_id);
            console.log('user', user);
            return user;
        });
    }
}
exports.UserServices = UserServices;
