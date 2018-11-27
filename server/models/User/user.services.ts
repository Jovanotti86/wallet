import { User } from "./user";
import { IUser, Ijwt } from "../interfaces";
import { mongoose } from "./../../../db/mongoose";
import * as bcrypt from 'bcrypt';
import { createJwt } from "../helper";

export class UserServices {
    
    /**
     * Create new user after signup
     * @param user 
     */
    public static async createUser(user: IUser) {

        const newUser = new User({
            email: user.email,
            password: user.password
        });

         return await newUser.save();
    }

    /**
     * Find user by id
     * @param _id 
     */
    public static async findUserById(_id: mongoose.Types.ObjectId) {
        const user : any = await User.findById(_id);
        return user;
    }

    /**
     * Check user credentials
     * @param email 
     * @param password 
     */
    public static async checkCredentials(email: string, password: string): Promise<Ijwt> {
        const user: any = await User.findOne({
            email: email
        });

        if(user && await bcrypt.compare(password, user.password)){
            const jwt: Ijwt = createJwt(user);
           return jwt;
        } else {
            return null;
        }

    }
}