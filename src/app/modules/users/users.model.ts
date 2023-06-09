import { Schema, model } from 'mongoose';
import { IUser } from './users.interface';

const userSchema = new Schema<IUser, object>(
    {
        id: { type: String, required: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const User = model<IUser>('User', userSchema);
