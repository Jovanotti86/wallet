"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET || 'abc123';
/**
 * Create jwt for the user
 * @param user
 */
function createJwt(user) {
    const token = jwt.sign({
        _id: user._id
    }, secret);
    const jwtToken = {
        access: 'auth',
        token,
    };
    return jwtToken;
}
exports.createJwt = createJwt;
/**
 * Validate sent token
 * @param token
 */
function validateJwt(token) {
    return jwt.verify(token, secret);
}
exports.validateJwt = validateJwt;
/**
 * Get information from jwt token
 * @param token
 */
function getUserDetails(token) {
    return jwt.decode(token);
}
exports.getUserDetails = getUserDetails;
