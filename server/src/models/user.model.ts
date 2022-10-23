import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { REGEX_EMAIL, REGEX_PASSWORD } from "../constants/regex";
import { ERROR_ACCOUNT } from "../constants/message";
const Schema = mongoose.Schema;

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    role: string;
    isEmailVerified: boolean;
}

const roles: string[] = [
    'guest',
    'user',
    'admin'
]

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value: string) {
            if (!value.match(REGEX_EMAIL)) {
                throw new Error(ERROR_ACCOUNT.EMAIL_INVALID);
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value: string) {
            if (!value.match(/\d/) || !value.match(REGEX_PASSWORD)) {
                throw new Error(ERROR_ACCOUNT.PASSWORD_INVALID);
            }
        },
        private: true,
    },
    avatar: {
        type: String,
        default: 'user',
    },
    role: {
        type: String,
        enum: roles,
        default: 'user',
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },

});

userSchema.pre('save', async function (next) {
    try {
        const hashPassword = await bcrypt.hash(this.password, 8);
        this.password = hashPassword;
        next();
    } catch (error: any) {
        next(error)
    }
});

const UserModel = mongoose.model('user', userSchema, 'users');
export default UserModel;
