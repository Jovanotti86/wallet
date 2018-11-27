import { IUser, Ijwt } from "./interfaces";
import * as jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || 'abc123';
/**
 * Create jwt for the user
 * @param user 
 */
export function createJwt(user: IUser): Ijwt {
    const token = jwt.sign({
        _id: user._id
    },
    secret);
    
    const jwtToken: Ijwt = {
        access: 'auth',
        token,
    }
    return jwtToken;
}

/**
 * Validate sent token
 * @param token 
 */
export function validateJwt(token: string) {
    return jwt.verify(token, secret)
}

/**
 * Get information from jwt token
 * @param token 
 */
export function getUserDetails(token: any) {
    return jwt.decode(token);
}