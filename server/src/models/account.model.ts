import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { REGEX_EMAIL, REGEX_PASSWORD } from "../constants/regex";
import { ERROR_ACCOUNT } from "../constants/message";
const Schema = mongoose.Schema;

interface IAccount extends Document {
    email: string;
    password: string;
    createdDate: Date;
}

const accountSchema = new Schema<IAccount>({
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
    createdDate: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

accountSchema.pre('save', async function (next) {
    try {
        const hashPassword = await bcrypt.hash(this.password, 8);
        this.password = hashPassword;
        next();
    } catch (error: any) {
        next(error)
    }
});

const AccountModel = mongoose.model('account', accountSchema, 'accounts');
export default AccountModel;
