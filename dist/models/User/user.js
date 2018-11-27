"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../../db/mongoose");
const bcrypt = __importStar(require("bcrypt"));
mongoose_1.mongoose.Promise = global.Promise;
const Schema = mongoose_1.mongoose.Schema;
const ObjectId = mongoose_1.mongoose.Types.ObjectId;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
});
/**
 * Has user password before save
 */
UserSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified) {
        user.password = bcrypt.hashSync(user.password, 10);
    }
    next();
});
const User = mongoose_1.mongoose.model('User', UserSchema);
exports.User = User;
