import { mongoose } from "./../../../db/mongoose";

import * as bcrypt from "bcrypt";
import { IUser } from "../interfaces";


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

interface IUserModel extends IUser, mongoose.Document {}
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
UserSchema.pre<IUserModel>("save", function(next) {
    const user = this;
   if(user.isModified) {
       user.password = bcrypt.hashSync(user.password, 10);
   }
    next();
})

const User = mongoose.model<IUserModel>('User', UserSchema);

export { User };